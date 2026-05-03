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

  console.log(student);
  const students = [{ id: 1, name: "Rahim Uddin", email: "rahim@example.com" }];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Student Profile Section
        </h1>

        <div className="">
          <div
            key={student.id}
            className="bg-white flex justify-center space-y-2 flex-col items-center shadow-lg rounded-2xl p-5 hover:shadow-xl transition"
          >
            <Avatar>
                <Avatar.Image alt={student?.name} src={student?.image} />
                <Avatar.Fallback>{student?.name}</Avatar.Fallback>
              </Avatar>

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {student.name}
                </h2>
                <p className="text-gray-500 text-sm">{student.email}</p>
              </div>
            </div>

            <UserProfileUpdateModel/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
