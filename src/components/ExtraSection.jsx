import React from "react";
import { SiSaltproject } from "react-icons/si";

const ExtraSection = () => {
  return (
    <div className=" py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
       
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-slate-800 lg:text-5xl">
            Why Choose <span className="text-blue-600">CodeNest</span>?
          </h2>

          <p className="mt-4 text-slate-500">
            We don’t just teach coding — we build your career-ready skills.
          </p>
        </div>

       
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-3xl"><SiSaltproject  size={28}/></div>
            <h3 className="text-xl font-bold text-slate-800">
              Project Based Learning
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Real-world projects build your portfolio while you learn step by
              step.
            </p>
          </div>

         
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-3xl">👨‍🏫</div>
            <h3 className="text-xl font-bold text-slate-800">Expert Mentors</h3>
            <p className="mt-2 text-sm text-slate-500">
              Learn from industry professionals with real experience.
            </p>
          </div>

        
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-3xl">⚡</div>
            <h3 className="text-xl font-bold text-slate-800">
              Fast Track Career
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Structured roadmap to help you become job-ready faster.
            </p>
          </div>

         
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-3xl">💻</div>
            <h3 className="text-xl font-bold text-slate-800">
              Modern Tech Stack
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Learn React, Next.js, Node.js and modern tools used in real jobs.
            </p>
          </div>

         
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-3xl">🌍</div>
            <h3 className="text-xl font-bold text-slate-800">
              Flexible Learning
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Learn anytime, anywhere at your own pace.
            </p>
          </div>

        
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-4 text-3xl">🔥</div>
            <h3 className="text-xl font-bold text-slate-800">
              Community Support
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Join a strong developer community and grow together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
