import React from "react";
import {
  FaBookOpen,
  FaRoad,
  FaProjectDiagram,
  FaLaptopCode,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFileContract,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto container px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold text-white">CodeNest</h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A modern learning platform for aspiring developers. Learn, build,
              and grow your career with real-world projects.
            </p>

            <div className="mt-6 flex gap-4 text-xl">
              <FaFacebook className="hover:text-blue-400 transition cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 transition cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 transition cursor-pointer" />
              <FaLinkedin className="hover:text-blue-500 transition cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Learn
            </h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition">
                <FaBookOpen /> All Courses
              </li>

              <li className="flex items-center gap-2 hover:text-white transition">
                <FaRoad /> Roadmaps
              </li>

              <li className="flex items-center gap-2 hover:text-white transition">
                <FaProjectDiagram /> Projects
              </li>

              <li className="flex items-center gap-2 hover:text-white transition">
                <FaLaptopCode /> Practice
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a className="hover:text-white transition">Help Center</a>
              </li>
              <li className="flex items-center gap-2">
                <FaFileContract />
                <a href="/terms" className="transition hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-white transition">Contact Us</a>
              </li>
              <li>
                <a className="hover:text-white transition">Community</a>
              </li>
              <li>
                <a className="hover:text-white transition">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contact
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li>📍 Gazipur, Bangladesh</li>
              <li>📧 support@codenest.com</li>
              <li>📞 +96958594586746</li>
            </ul>
          </div>
        </div>

        <div className="my-10 border-t border-slate-800"></div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CodeNest. Built for future developers.
          </p>

          <div className="flex gap-6 text-xs text-slate-500">
            <a className="hover:text-white transition" href="/terms">
              Terms & Conditions
            </a>

            <a className="hover:text-white transition" href="/privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
