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
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="projects" className="text-white bg-[#1e2836] px-4 py-12">
      <h2 className="text-orange-500 text-3xl font-semibold mb-10 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[
          {
            title: "CodeHatch – E-Learning",
            desc: "A full-stack learning platform with user auth, video content, and payment gateway. Designed for seamless course browsing and secure access.",
            image: "/src/assets/projects/codehatch.png",
            tech: [
              "React (Vite)",
              "Tailwind CSS",
              "GSAP",
              "React Router v7",
              "Express.js",
              "MongoDB Atlas",
              "JWT Auth",
            ],
            github: "https://github.com/Mounesh-v?tab=repositories",
            demo: "https://jolly-blancmange-62ed96.netlify.app/",
          },
          {
            title: "MeteoZin – Weather App",
            desc: "Real-time weather app with animated UI, responsive layout and API-based forecasts.",
            image: "/src/assets/projects/weather.png",
            tech: [
              "React",
              "Vite",
              "Tailwind CSS",
              "Framer Motion",
              "Axios",
              "Toastify",
            ],
            github: "https://github.com/Mounesh-v/meteozin-weather",
            demo: "https://meteozin.netlify.app/",
          },
          {
            title: "Music Tracker",
            desc: "A modern music search app using the Spotify API to display live album art and previews.",
            image: "/src/assets/projects/musicTracker.png",
            tech: ["React.js", "Tailwind CSS", "Spotify API", "Netlify"],
            github: "https://github.com/Mounesh-v/music-tracker-app",
            demo: "https://music-tracker-app.netlify.app/",
          },
          {
            title: "TechConference – Event Platform",
            desc: "Built with SvelteKit and Bootstrap UI for showcasing speaker lineups, schedules, and ticketing features.",
            image: "/src/assets/projects/Techconf.png",
            tech: ["SvelteKit", "Sveltestrap", "Bootstrap", "Netlify"],
            github: "https://github.com/Mounesh-v/techconf",
            demo: "https://techconfernce.netlify.app/",
          },
        ].map((project, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="bg-gray-900 rounded-xl shadow-md overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>

            {/* Text content */}
            <div className="p-5">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{project.desc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 text-xs text-orange-300 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub and Live Site */}
              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 font-semibold text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 font-semibold text-sm"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
