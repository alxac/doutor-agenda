"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SignUpForm from "./components/sign-up-form";

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
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Faça login para continuar
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                teste 1
                            </CardContent>
                            <CardFooter>
                                <Button>Entrar</Button>
                            </CardFooter>
                        </Card>
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