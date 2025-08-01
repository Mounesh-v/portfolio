import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiGit,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);

  // Clear refs on rerender
  skillRefs.current = [];

  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  useEffect(() => {
    skillRefs.current.forEach((skill) => {
      gsap.fromTo(
        skill,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            // markers: true, // enable for debugging
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="skills"
      ref={containerRef}
      className="bg-[#1e2836] text-white px-5 sm:px-10 py-12 w-full"
    >
      <h2 className="text-orange-500 text-3xl font-semibold mb-10 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend */}
        <div
          ref={addToRefs}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300"
        >
          <h3 className="text-xl font-bold mb-4 text-orange-400">Frontend</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaHtml5 className="text-orange-500" /> HTML5
            </li>
            <li className="flex items-center gap-2">
              <FaCss3Alt className="text-blue-500" /> CSS3
            </li>
            <li className="flex items-center gap-2">
              <FaJs className="text-yellow-400" /> JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <FaReact className="text-cyan-400" /> React.js
            </li>
            <li className="flex items-center gap-2">
              <SiTailwindcss className="text-sky-400" /> Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <SiVite className="text-purple-400" /> Vite
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div
          ref={addToRefs}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300"
        >
          <h3 className="text-xl font-bold mb-4 text-orange-400">Backend</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <FaNodeJs className="text-green-400" /> Node.js
            </li>
            <li className="flex items-center gap-2">
              <SiExpress className="text-gray-300" /> Express.js
            </li>
            <li className="flex items-center gap-2">
              <SiMongodb className="text-green-500" /> MongoDB
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div
          ref={addToRefs}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300"
        >
          <h3 className="text-xl font-bold mb-4 text-orange-400">
            Tools & Platforms
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <SiGit className="text-red-500" /> Git
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-white" /> GitHub
            </li>
            <li className="flex items-center gap-2">
              <SiPostman className="text-orange-400" /> Postman
            </li>
            <li className="flex items-center gap-2">
              <SiVercel className="text-white" /> Vercel
            </li>
            <li className="flex items-center gap-2">
              <SiRender className="text-blue-300" /> Render
            </li>
            <li className="flex items-center gap-2">
            <SiNetlify className="text-3xl text-cyan-400" /> Netlify

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
