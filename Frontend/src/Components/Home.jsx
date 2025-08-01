import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const fullStackRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    ).fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" },
      "-=0.5"
    );

    if (fullStackRef.current) {
      const letters = fullStackRef.current.querySelectorAll("span");
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1.5,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const fullStackText = "MERN Stack Developer".split("").map((char, i) => (
    <span key={i} className="inline-block opacity-0">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div
      id="home"
      ref={containerRef}
      className="flex flex-col md:flex-row border-2 border-gray-800 bg-[#1e2836] text-white min-h-screen items-center justify-center px-6 py-10"
    >
      {/* Text Section */}
      <div
        ref={textRef}
        className="md:w-1/2 w-full font-semibold flex flex-col justify-center md:items-start items-center text-center md:text-left"
      >
        <p className="text-white text-2xl sm:text-3xl mb-2">Hello! I'm</p>
        <p
          ref={fullStackRef}
          className="text-orange-500 text-2xl sm:text-3xl font-bold mb-4"
          aria-label="MERN Stack Developer"
        >
          {fullStackText}
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Passionate about building fast, scalable, and <br className="hidden sm:inline" />
          user-focused web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded shadow-md transition"
          >
            View Projects
          </button>
          <a href="/mounesh_resume.pdf" download>
            <button className="bg-white hover:bg-orange-500 hover:text-white text-orange-400 font-bold py-2 px-6 rounded shadow-md transition">
              Resume
            </button>
          </a>
        </div>
      </div>

      {/* Circular Logo Section */}
      <div
        ref={imageRef}
        className="mt-10 md:mt-0 md:ml-[100px] h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="#000000"
            stroke="white"
            strokeWidth="10"
          />
          <text
            x="50%"
            y="58%"
            textAnchor="middle"
            fill="white"
            fontSize="80"
            fontFamily="serif"
            fontWeight="bold"
            dy=".3em"
          >
            M
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Home;
