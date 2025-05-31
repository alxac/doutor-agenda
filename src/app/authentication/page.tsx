import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SignUpForm from "./components/sign-up-form";
import LoginForm from "./components/login-form";

function AuthenticationPage() {



    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Tabs defaultValue="login">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Criar conta</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <LoginForm />
                    </TabsContent>
                    <TabsContent value="register">
                        <SignUpForm />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

export default AuthenticationPage;