import { getCourses } from "@/lib/api";
import React from "react";
import { Button, Card, CloseButton } from "@heroui/react";
import Link from "next/link";
import { AiFillForward } from "react-icons/ai";
import { GiDuration } from "react-icons/gi";
const PopularCourses = async () => {
  const AllCourses = await getCourses();
  console.log(AllCourses);

  const topCourse = AllCourses.filter((f) => f.rating > "4.8");
  console.log(topCourse);

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {topCourse.map((course) => {
        return (
          <Card
            key={course.id}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                alt={course?.title}
                className="h-56 rounded-xl w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
                src={course?.image}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-blue-600 shadow backdrop-blur">
                ⭐ Top Rated
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                <AiFillForward size={20} />
                <span>Level</span>
                <span>•</span>
                <span>{course?.level}</span>
              </div>

              <Card.Title className="line-clamp-2 text-2xl font-bold leading-snug text-slate-800 transition group-hover:text-blue-600">
                {course?.title}
              </Card.Title>

              <Card.Description className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">
                {course?.description}
              </Card.Description>

              <div className="flex mt-4 items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4">
                <img
                  src={course?.instructorImage}
                  className="h-12 w-12 rounded-full border border-white shadow"
                  alt="instructor"
                />

                <div>
                  <p className="text-lg font-bold text-slate-800">
                    {course?.instructor}
                  </p>

                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    {course?.instructorDesignation}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <GiDuration size={20} />
                <span>Duration</span>
                <span>•</span>
                <span>{course?.duration}</span>
              </div>

              <Card.Footer className="mt-auto flex items-center justify-between border-t border-slate-100 px-0 pt-5">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    ⭐ {course?.rating}
                  </h3>

                  <p className="text-xs text-slate-500">Course Rating</p>
                </div>

                <Link href={`/courses/${course.id}`}>
                  <Button className="rounded-xl bg-blue-600 px-5 font-medium text-white shadow-lg shadow-blue-200 transition hover:scale-105 hover:bg-blue-700">
                    View Details →
                  </Button>
                </Link>
              </Card.Footer>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default PopularCourses;
