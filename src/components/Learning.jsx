import React from "react";

const Learning = () => {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto container  px-6 lg:px-10">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-slate-800 lg:text-5xl">
            Smart <span className="text-blue-600">Learning Tips</span>
          </h2>

          <p className="mt-4 text-slate-500">
            Improve your study habits and become a faster, smarter developer.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">📘</div>

            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600">
              Study Techniques
            </h3>

            <p className="mt-3 text-slate-500">
              • Learn by building real projects instead of just watching videos{" "}
              <br />
              • Break topics into small parts (chunk learning) <br />
              • Use active recall & practice coding daily <br />• Revise
              previous topics every week
            </p>
          </div>

          <div className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-4xl">⏳</div>

            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600">
              Time Management Tips
            </h3>

            <p className="mt-3 text-slate-500">
              • Use Pomodoro technique (25 min focus, 5 min break) <br />
              • Set daily coding goals (small & realistic) <br />
              • Avoid multitasking while learning <br />• Track progress weekly
              to stay motivated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
