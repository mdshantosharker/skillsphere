import { getCourses } from "@/lib/api";
import { Card, CloseButton, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const course = await getCourses();
  const findCourse = course.find((c) => c.id == id);
  console.log(findCourse);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
      <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="relative h-75 w-full overflow-hidden">
          <img
            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
            alt="course"
            className="h-full rounded-xl w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-blue-600 shadow">
            ⭐ Featured Course
          </div>
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-slate-800 lg:text-4xl">
            {findCourse.title}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-slate-500 lg:text-base">
            {findCourse.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-500">📦 Level</p>
              <h3 className="mt-1 font-bold text-slate-800">
                {findCourse.level}
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-500">⏳ Duration</p>
              <h3 className="mt-1 font-bold text-slate-800">
                {findCourse.duration}
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-500">⭐ Rating</p>
              <h3 className="mt-1 font-bold text-slate-800">
                {findCourse.rating}
              </h3>
            </div>
          </div>

          {/* Extra Info */}
          <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <h3 className="text-lg font-semibold text-slate-800">
              🎯 What you will learn
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>• Build real-world web applications</li>
              <li>• Master React & Next.js</li>
              <li>• Learn backend API development</li>
              <li>• Deploy full projects to production</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
              <div className="text-2xl">📚</div>

              <div>
                <p className="text-xs text-slate-500">Category</p>
                <h2 className="text-lg font-bold text-slate-800">
                  Web Development
                </h2>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
              {/* avatar */}
              <img
                src="https://i.pravatar.cc/100?img=12"
                className="h-12 w-12 rounded-full border border-white shadow"
                alt="instructor"
              />

              <div>
                <p className="text-xs text-slate-500">Instructor</p>
                <h2 className="text-lg font-bold text-slate-800">John Doe</h2>

                <p className="text-xs text-slate-500 flex items-center gap-1">
                  👨‍🏫 Full Stack Developer
                </p>
              </div>
            </div>

            <Link href="/">
              <Button className="h-12 rounded-xl bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-200 transition hover:scale-105 hover:bg-blue-700">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetailsPage;
