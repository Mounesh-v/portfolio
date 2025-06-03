import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRefs = useRef([]);
  projectRefs.current = [];

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useEffect(() => {
    projectRefs.current.forEach((project) => {
      gsap.fromTo(
        project,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
            // markers: true, // Uncomment to debug scroll triggers
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="text-white bg-[#1e2836]">
      <div className="bg-gray-900 px-5 sm:px-10 py-12 w-full">
        <h2 className="text-orange-500 text-3xl font-semibold mb-10 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
          <div
            ref={addToRefs}
            className="bg-gray-800 h-64 rounded-xl shadow-lg p-6 hover:shadow-orange-500 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">Full Stack Task Manager</h3>
            <p className="text-gray-300 mb-4">
              A task management app with React frontend and Node.js/Express backend.
              Features user authentication, task CRUD, and deadlines.
            </p>
          </div>
          <div
            ref={addToRefs}
            className="bg-gray-800 h-64 rounded-xl shadow-lg p-6 hover:shadow-orange-500 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">Social Network Platform</h3>
            <p className="text-gray-300 mb-4">
              A social media web app with real-time chat, posts, likes, and
              comments built using MERN stack and Socket.io.
            </p>
          </div>
          <div
            ref={addToRefs}
            className="bg-gray-800 h-64 rounded-xl shadow-lg p-6 hover:shadow-orange-500 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">Online Learning Platform</h3>
            <p className="text-gray-300 mb-4">
              An e-learning platform with courses, quizzes, and progress tracking.
              Built with React, Node.js, Express, and MongoDB.
            </p>
          </div>
          <div
            ref={addToRefs}
            className="bg-gray-800 h-64 rounded-xl shadow-lg p-6 hover:shadow-orange-500 transition duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">Event Booking System</h3>
            <p className="text-gray-300 mb-4">
              A full-stack event booking app with calendar integration, booking
              management, and user roles. Developed using MERN stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
