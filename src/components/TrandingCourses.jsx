import React from "react";

const TrandingCourses = () => {
  const courses = [
    "Full Stack Web Development",
    "React & Next.js Mastery",
    "Data Structures & Algorithms",
    "UI/UX Design Fundamentals",
    "Backend Development with Node.js",
    "Python for Beginners",
  ];

  return (
    <section className="py-16 pt-30 text-slate-800">
      <div className="">
        <h2 className="text-6xl mb-3 font-bold text-center text-slate-900">
          🔥Trending Courses
        </h2>

        <p className="text-center text-slate-500 mt-2 text-sm">
          Most popular learning paths in SkillSphere
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 hover:border-slate-300 
          hover:shadow-lg transition p-6 rounded-xl cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-slate-900">{course}</h3>

              <p className="text-sm text-slate-500 mt-2">
                Start learning and build real-world projects with hands-on
                practice.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrandingCourses;
