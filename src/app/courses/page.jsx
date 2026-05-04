"use client";

import { getCourses } from "@/lib/api";
import { Card, Button } from "@heroui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillForward } from "react-icons/ai";
import { GiDuration } from "react-icons/gi";

const AllCoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await getCourses();
      setAllCourses(data || []);
    };

    fetchCourses();
  }, []);

  const filteredCourses = allCourses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-6 my-10 lg:px-10">
      <div className="mb-8 flex justify-center">
        <div className="flex w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full py-3 pl-12 pr-3 text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                alt={course?.title}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                src={course?.image}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
                <AiFillForward size={20} />
                <span>{course?.level}</span>
              </div>

              <Card.Title className="text-2xl font-bold">
                {course?.title}
              </Card.Title>

              <Card.Description className="mt-2 text-sm text-slate-500">
                {course?.description}
              </Card.Description>

              <div className="mt-4 flex items-center gap-2 text-sm">
                <GiDuration size={20} />
                <span>{course?.duration}</span>
              </div>

              <Card.Footer className="mt-auto flex items-center justify-between pt-5">
                <h3 className="font-bold">⭐ {course?.rating}</h3>

                <Link href={`/courses/${course.id}`}>
                  <Button className="bg-blue-600 text-white px-5 rounded-xl">
                    View Details →
                  </Button>
                </Link>
              </Card.Footer>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCoursesPage;
