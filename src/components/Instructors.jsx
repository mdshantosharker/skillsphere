import React from "react";

const Instructors = () => {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto container px-6 lg:px-10">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-slate-800 lg:text-5xl">
            🏆 Top <span className="text-blue-600">Instructors</span>
          </h2>
          <p className="mt-4 text-slate-500">
            Learn from industry experts who are passionate about teaching.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <img
              src="https://i.pravatar.cc/150?img=12"
              className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow"
            />
            <h3 className="mt-4 text-xl font-bold text-slate-800 group-hover:text-blue-600">
              John Doe
            </h3>
            <p className="text-sm text-slate-500">Full Stack Developer</p>
            <p className="mt-3 text-xs text-slate-500">
              React, Next.js, Node.js expert with 5+ years experience.
            </p>
          </div>
          <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <img
              src="https://i.pravatar.cc/150?img=32"
              className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow"
            />
            <h3 className="mt-4 text-xl font-bold text-slate-800 group-hover:text-blue-600">
              Sarah Khan
            </h3>
            <p className="text-sm text-slate-500">Frontend Engineer</p>
            <p className="mt-3 text-xs text-slate-500">
              UI/UX focused developer specialized in modern frontend systems.
            </p>
          </div>
          <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <img
              src="https://i.pravatar.cc/150?img=47"
              className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow"
            />
            <h3 className="mt-4 text-xl font-bold text-slate-800 group-hover:text-blue-600">
              Alex Johnson
            </h3>
            <p className="text-sm text-slate-500">Backend Engineer</p>

            <p className="mt-3 text-xs text-slate-500">
              API design, database architecture & scalable systems expert.
            </p>
          </div>
          <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <img
              src="https://i.pravatar.cc/150?img=5"
              className="mx-auto h-24 w-24 rounded-full border-4 border-white object-cover shadow"
            />
            <h3 className="mt-4 text-xl font-bold text-slate-800 group-hover:text-blue-600">
              Emily Chen
            </h3>
            <p className="text-sm text-slate-500">DevOps Engineer</p>
            <p className="mt-3 text-xs text-slate-500">
              Cloud, CI/CD, deployment automation specialist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
