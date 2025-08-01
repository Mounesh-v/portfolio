import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import facebook from "../assets/Logos/facebook.svg";
import linkedin from "../assets/Logos/linkedin.svg";
import twitter from "../assets/Logos/twitter.svg";
import github from "../assets/Logos/github.svg";
import {FiDatabase } from "react-icons/fi"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const followMeRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      defaults: { ease: "power3.out" },
    });

    tl.from(followMeRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
    });

    tl.fromTo(
      iconsRef.current,
      {
        opacity: 0,
        scale: 0,
        rotationX: 90,
        transformOrigin: "center bottom",
      },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="flex flex-col md:flex-row justify-between items-start border-2 border-gray-800 text-white min-h-screen w-full px-5 sm:px-10 py-8 md:py-12"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Left Section */}
      <div className="w-full md:w-3/5 pr-0 md:pr-10 mb-8 md:mb-0">
        <p className="text-orange-500 text-3xl mb-4 font-semibold">About Me</p>
        <p className="text-white text-2xl font-semibold">
          Hello! I'm{" "}
          <span className="text-orange-500 font-semibold">Mounesh</span>. a
          creative and curious Full Stack Web Developer with a passion for
          building modern, user-centric <br />
          <span className="text-orange-500 font-semibold">
            web applications.
          </span>
          .
        </p>
        <p className="text-white my-5 text-base sm:text-lg leading-relaxed">
          I specialize in crafting responsive, scalable solutions using
          technologies like React, Node.js, Express, MongoDB, Tailwind CSS, and
          Bootstrap. I love turning ideas into clean, intuitive interfaces and
          robust backend systems. Whether I’m building RESTful APIs or
          fine-tuning front-end experiences, I focus on writing maintainable
          code and delivering impactful digital products. Driven by curiosity
          and a hands-on mindset, I constantly explore new tools, frameworks,
          and design patterns through real-world projects and collaborative
          development. For me, development is not just a skill — it’s a creative
          process of solving problems, bringing ideas to life, and continuously
          learning along the way.
        </p>
      </div>

      {/* Right Section - Follow Me */}
      <div className="w-full md:w-auto flex justify-center items-center md:mr-[70px]">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Box 1 */}
    <div className="hover:bg-[#f36d07] bg-[#0b1120] cursor-pointer hover:shadow-xl hover:scale-105 duration-700 rounded-2xl px-6 py-8 text-center w-[200px]">
      <div className="text-3xl text-blue-400 mb-2">&lt;/&gt;</div>
      <h3 className="text-white font-bold text-lg">4</h3>
      <p className="text-gray-400 text-sm mt-1">Projects Built</p>
    </div>

    {/* Box 2 */}
    <div className="hover:bg-[#f36d07] bg-[#0b1120] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 rounded-2xl px-6 py-8 text-center w-[200px]">
      <div className="text-3xl text-orange-400 mb-2"><center><FiDatabase /></center></div>
      <h3 className="text-white font-bold text-lg">MERN</h3>
      <p className="text-gray-400 text-sm mt-1">Stack developer</p>
    </div>

    {/* Box 3 */}
    <div className="hover:bg-[#f36d07] bg-[#0b1120] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 rounded-2xl px-6 py-8 text-center w-[200px]">
      <div className="text-3xl text-cyan-400 mb-2">🌐</div>
      <h3 className="text-white font-bold text-lg">Cloud</h3>
      <p className="text-gray-400 text-sm mt-1">Integration</p>
    </div>

    {/* Box 4 */}
    <div className="hover:bg-[#f36d07] bg-[#0b1120] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 rounded-2xl px-6 py-8 text-center w-[200px]">
      <div className="text-3xl text-purple-400 mb-2">⚡</div>
      <h3 className="text-white font-bold text-lg">Fresh</h3>
      <p className="text-gray-400 text-sm mt-1">Innovation</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
