"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Invalid email or password");
      return;
    }

    router.push("/"); // Navigate to Home page
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <Card className="mx-auto w-[450px] py-10 mt-10 px-6">
      <h1 className="text-center text-2xl font-bold mb-6">Login</h1>

      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        <TextField
          isRequired
          name="email"
          type="email"
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters
          </Description>
          <FieldError />
        </TextField>

        <Button type="submit" className="w-full">
          Login
        </Button>

        <p className="text-center text-sm">
          Dont have an account?{" "}
          <a href="/register" className="text-blue-500 underline">
            Register
          </a>
        </p>

        <p className="text-center">Or</p>

        <Button
          onClick={handleGoogleLogin}
          type="button"
          variant="outline"
          className="w-full"
        >
          Sign In with Google
        </Button>

      </Form>
    </Card>
  );
}