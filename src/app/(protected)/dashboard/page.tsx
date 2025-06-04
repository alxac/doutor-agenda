import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import SignOutButton from "./_components/sign-out-button";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersToClinicsTable } from "@/db/schema";

const Dashboard = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    console.log(session?.user);
    if (!session?.user) {
        redirect("/authentication");
    }
    const clinics = await db.query.usersToClinicsTable.findMany({
        where: eq(usersToClinicsTable.userId, session.user.id),
    });
    if (clinics.length === 0) {
        redirect("/clinic-form");
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>{session?.user?.name}</h1>
            <h1>{session?.user?.email}</h1>
            <h1>{session?.user?.image}</h1>
            <SignOutButton />
        </div>
    );
};

export default Dashboard;