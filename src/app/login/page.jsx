"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });
    console.log(data);
    if (data) {
      toast.success("Login successfully");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const googleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    // if (data) {
    //   toast.success("Login successfully");
    // }
  };

  return (
    <div className="min-h-[70vh] my-10 flex items-center justify-center  px-4">
      <Form
        className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-gray-200 flex flex-col gap-5"
        onSubmit={onSubmit}
      >
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-gray-800">
            Login Your Account
          </h2>
        </div>

        <TextField
          className="w-full"
          name="email"
          type="email"
          validate={(value) => {
            if (!value) {
              return "Email is required";
            }

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email";
            }

            return null;
          }}
        >
          <Label>Email Address</Label>

          <Input
            placeholder="example@gmail.com"
            className="h-12 rounded-xl border border-gray-300 px-4"
          />

          <FieldError className="text-red-500 text-sm mt-1" />
        </TextField>

        <TextField
          className="w-full"
          name="password"
          placeholder="Enter your password"
          validate={(value) => {
            if (!value) {
              return "Password is required";
            }

            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }

            return null;
          }}
        >
          <Label>Password</Label>

          <InputGroup className="relative">
            <InputGroup.Input
              className="h-12 rounded-xl border border-gray-300 px-4 pr-10 w-full"
              type={isVisible ? "text" : "password"}
            />

            <InputGroup.Suffix className="absolute right-3 top-1/2 -translate-y-1/2">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <FieldError className="text-red-500 text-sm mt-1" />
        </TextField>

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all"
        >
          Login
        </Button>

        <div className="relative flex items-center">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-400">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            className="h-12 rounded-xl border border-gray-300 bg-white hover:bg-gray-50"
            onClick={googleLogin}
          >
            <FcGoogle size={25} />
            Continue with Google
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href={"/register"}
            className="font-semibold text-black hover:underline"
          >
            SignUp
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
