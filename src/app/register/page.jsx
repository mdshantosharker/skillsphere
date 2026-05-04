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
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.image,
      fetchOptions: {
        onSuccess: async () => {
          await authClient.signOut();
          router.push("/login");
        },
      },
    });
    if (data) {
      toast.success("SignUp successfully");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const googleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div>
      <div className="min-h-[70vh] my-10 flex items-center justify-center  px-4">
        <Form
          className="w-full max-w-md bg-white rounded-3xl p-8 shadow-xl border border-gray-200 flex flex-col gap-5"
          onSubmit={onSubmit}
        >
          <div className="text-center mb-2">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 mt-1">
              Welcome! Please enter your details
            </p>
          </div>

          <TextField
            className="w-full"
            name="name"
            type="text"
            validate={(value) => {
              if (!value) {
                return "Name is required";
              }

              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Full Name</Label>

            <Input
              placeholder="Enter your Name"
              className="h-12 rounded-xl border border-gray-300 px-4"
            />

            <FieldError className="text-red-500 text-sm mt-1" />
          </TextField>

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
            name="image"
            type="url"
            validate={(value) => {
              if (!value) {
                return "Photo URL is required";
              }

              return null;
            }}
          >
            <Label>Photo URL</Label>

            <Input
              placeholder="https://example.com/photo.jpg"
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
            className="h-12 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all"
          >
            <Check className="w-4 h-4 mr-2" />
            Create Account
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
              Sign up with Google
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="font-semibold text-black hover:underline"
            >
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
