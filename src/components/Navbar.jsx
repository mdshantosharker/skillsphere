"use client";
import { useState } from "react";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()
  const { data } = authClient.useSession();
  const user = data?.user;
  console.log(user);
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/courses">Courses</Link>
      </li>

      
      <li>
        <Link href="/profile">My Profile</Link>
      </li>
    </>
  );

  const userSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // redirect to login page
        },
      },
    });
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-0">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <p className="font-bold">ACME</p>
          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">{links}</ul>

        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <Avatar>
                <Avatar.Image alt={user.name} src={user?.image} />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>

              <Button variant="danger-soft" onClick={userSignOut}>
                SignOut <FaArrowRightToBracket />
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button>Login</Button>
              </Link>

              <Link href="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* small device */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}

            {/* Login and signup */}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {user ? (
                <>
                  <Avatar>
                    <Avatar.Image alt={user.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                  </Avatar>

                  <Button variant="danger-soft" onClick={userSignOut}>
                    SignOut <FaArrowRightToBracket />
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block py-2">
                    Login
                  </Link>

                  <Link href={"/register"}>
                    {" "}
                    <Button className="w-full"> Sign Up </Button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
