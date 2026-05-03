import { UserProfileUpdateModel } from "@/components/UserProfileUpdateModel";
import { auth } from "@/lib/auth";
import { Avatar } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const student = session.user;
  return (
    <div className="min-h-[55vh] pt-10 bg-linear-to-br from-slate-50 to-slate-200 p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-center text-3xl font-bold text-slate-800">
          Student Profile
        </h1>

        <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg transition hover:shadow-2xl">
          <div className="mx-auto flex justify-center mb-5">
            <Avatar className="h-24 w-24">
              <Avatar.Image alt={student?.name} src={student?.image} />
              <Avatar.Fallback className="text-xl font-bold">
                {student?.name}
              </Avatar.Fallback>
            </Avatar>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">{student?.name}</h2>

          <p className="mt-1 text-sm text-slate-500">{student?.email}</p>

          <div className="my-6 border-t border-slate-100"></div>

          <div className="flex justify-center">
            <UserProfileUpdateModel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
