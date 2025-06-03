import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      ref={containerRef}
      className="bg-[#1e2836] text-white px-5 sm:px-10 py-12 w-full"
    >
      <h2 className="text-orange-500 text-3xl font-semibold mb-10 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
        <div
          ref={addToRefs}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300 cursor-pointer"
        >
          <h3 className="text-xl font-bold mb-2">JavaScript</h3>
          <p className="text-gray-300 mb-4">
            Proficient in JavaScript, including ES6+ features and asynchronous
            programming.
          </p>
        </div>
        <div
          ref={addToRefs}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300 cursor-pointer"
        >
          <h3 className="text-xl font-bold mb-2">React+Vite</h3>
          <p className="text-gray-300 mb-4">
            Experienced in building dynamic user interfaces with React and
            managing state with hooks.
          </p>
        </div>
        <div
          ref={addToRefs}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300 cursor-pointer"
        >
          <h3 className="text-xl font-bold mb-2">Node.js</h3>
          <p className="text-gray-300 mb-4">
            Skilled in building RESTful APIs and server-side applications using
            Node.js and Express.
          </p>
        </div>
        <div
          ref={addToRefs}
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-orange-500 transition duration-300 cursor-pointer"
        >
          <h3 className="text-xl font-bold mb-2">MongoDB</h3>
          <p className="text-gray-300 mb-4">
            Proficient in using MongoDB for database management, including CRUD
            operations and aggregation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
