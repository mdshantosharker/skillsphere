"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import { SiSimilarweb } from "react-icons/si";
import animationData from "../../public/STUDENT.json";

const Banner = () => {
  return (
    <div className="animate__animated animate__fadeInDown relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="relative mx-auto flex container flex-col-reverse items-center gap-16 px-6 py-16 lg:flex-row lg:px-10 lg:py-24">
       
        <div className="space-y-7 lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur">
            <SiSimilarweb /> Learn Modern Web Development
          </div>

          <h1 className="text-4xl font-extrabold leading-tight lg:text-7xl">
            Master the craft of{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              coding
            </span>{" "}
            with confidence.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 lg:text-lg">
            CodeNest provides a structured and modern learning environment for
            aspiring developers. Learn from industry experts, build real-world
            projects, and become job-ready faster.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button className="h-12 rounded-xl bg-blue-500 px-7 text-white shadow-lg shadow-blue-500/30 transition hover:scale-105 hover:bg-blue-600">
              Start Learning Free
            </Button>

            <Button
              variant="bordered"
              className="h-12 rounded-xl border-slate-600 bg-white/5 px-7 text-white backdrop-blur transition hover:bg-white/10"
            >
              Browse All Pathways
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 pt-6">
            <div>
              <h2 className="text-3xl font-bold text-blue-400">10K+</h2>
              <p className="text-sm text-slate-400">Active Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">150+</h2>
              <p className="text-sm text-slate-400">Premium Courses</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400">95%</h2>
              <p className="text-sm text-slate-400">Success Rate</p>
            </div>
          </div>
        </div>

        <div className="relative lg:w-1/2">
          <div className="absolute inset-0 rounded-[30px] bg-linear-to-r from-blue-500/30 to-cyan-400/20 blur-2xl"></div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <Lottie animationData={animationData} loop={true} />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-lg lg:block">
            <p className="text-sm text-slate-400">Live Coding Sessions</p>
            <h3 className="text-2xl font-bold text-white">Every Week</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
