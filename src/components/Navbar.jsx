"use client";

import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const { data } = authClient.useSession();

  const user = data?.user;

  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/courses">Courses</NavLink>
      </li>

      <li>
        <NavLink href="/profile">My Profile</NavLink>
      </li>
    </>
  );

  const userSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <header className="mx-auto flex h-20 container items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl" />
            )}
          </button>

          <Link href="/">
            <h1 className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent">
              CodeNest
            </h1>
          </Link>
        </div>

        <ul className="hidden items-center text-white gap-8 md:flex">
          {links}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <div className="flex items-center gap-3 rounded-full border bbg-slate-900 px-3 py-2">
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                </Avatar>

                <div className="leading-none">
                  <h3 className="text-sm font-semibold text-white">
                    {user?.name}
                  </h3>
                </div>
              </div>

              <Button
                onClick={userSignOut}
                className="h-11 rounded-xl bg-red-500/10 px-5 text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                Sign Out
                <FaArrowRightToBracket />
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="h-11 rounded-xl px-6 text-slate-300 hover:bg-slate-800"
                >
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="h-11 rounded-xl bg-blue-500 px-6 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105 hover:bg-blue-600">
                  SignUp
                </Button>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="space-y-6 px-6 py-6">
            <ul className="space-y-5 text-lg">{links}</ul>

            <div className="border-t border-slate-800 pt-6">
              {user ? (
                <div className="space-y-5">
                  <div className="flex items-center gap-3 rounded-2xl border  bg-slate-900 p-3">
                    <Avatar>
                      <Avatar.Image alt={user?.name} src={user?.image} />
                      <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                    </Avatar>

                    <div>
                      <h3 className="font-semibold text-white">{user?.name}</h3>
                    </div>
                  </div>

                  <Button
                    variant="danger-soft"
                    onClick={userSignOut}
                    className="h-12 w-full rounded-xl bg-white text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    Sign Out
                    <FaArrowRightToBracket />
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link href="/login">
                    <Button
                      variant="outline"
                      className="h-11 w-full rounded-xl px-6 text-slate-300 hover:bg-slate-800"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href="/register">
                    <Button className="h-11 w-full rounded-xl bg-blue-500 px-6 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105 hover:bg-blue-600">
                      SignUp
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
