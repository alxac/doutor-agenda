"use server"

import { auth } from "@/lib/auth";
import { upsertDoctorSchema } from "./schema";
import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { actionClient } from "@/lib/next-safe-action";
import { headers } from "next/headers";

export const upsertDoctor = actionClient
    .schema(upsertDoctorSchema)
    .action(async ({ parsedInput }) => {
        const session = await auth.api.getSession({ headers: await headers() });

        if (!session?.user) {
            return { error: "Unauthorized" };
        }

        if (!session.user.clinic?.id) {
            throw new Error("Clinic not found");
        }

        await db
            .insert(doctorsTable)
            .values({
                id: parsedInput.id,
                clinicId: session.user.clinic.id,
                ...parsedInput,
            })
            .onConflictDoUpdate({
                target: [doctorsTable.id],
                set: {
                    ...parsedInput
                },
            });
    })