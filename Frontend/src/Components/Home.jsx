import React, { useEffect, useRef } from "react";
import hero from "../assets/hero.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // New ref for the "Full Stack Web Developer" text
  const fullStackRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
        // markers: true,
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

    // Letter-by-letter animation for "Full Stack Web Developer"
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
          delay: 1.5, // start after main tl animations
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Split the "Full Stack Web Developer" text into spans for animation
  const fullStackText = "Full Stack Web Developer".split("").map((char, i) => (
    <span key={i} style={{ display: "inline-block", opacity: 0 }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row border-2 border-gray-800 bg-[#1e2836] text-white min-h-screen items-center justify-center px-6"
    >
      {/* Text Side */}
      <div
        ref={textRef}
        className="md:w-1/2 w-full font-semibold flex flex-col justify-center md:items-start items-center text-center md:text-left"
      >
        <p className="text-orange-500 text-3xl mb-4">Hello!</p>
        <p className="text-white text-3xl mb-4">
          I'm Professional &
        </p>
        <p
          ref={fullStackRef}
          className="text-orange-500 text-3xl"
          aria-label="Full Stack Web Developer"
        >
          {fullStackText}
        </p>
      </div>

      {/* Circular Image */}
      <div
        ref={imageRef}
        className="mt-10 md:mt-0 md:ml-[100px] h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full border-4 border-orange-500 flex items-center justify-center overflow-hidden"
      >
        <img
          className="h-[500px] w-[500px] object-cover"
          src={hero}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Home;
