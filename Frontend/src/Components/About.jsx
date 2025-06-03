import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import facebook from "../assets/Logos/facebook.svg";
import linkedin from "../assets/Logos/linkedin.svg";
import twitter from "../assets/Logos/twitter.svg";
import github from "../assets/Logos/github.svg";

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
      ref={containerRef}
      className="flex flex-col md:flex-row justify-between items-start border-2 border-gray-800 text-white min-h-screen w-full px-5 sm:px-10 py-8 md:py-12"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Left Section */}
      <div className="w-full md:w-3/5 pr-0 md:pr-10 mb-8 md:mb-0">
        <p className="text-orange-500 text-3xl mb-4 font-semibold">About Me</p>
        <p className="text-white text-2xl font-semibold">
          Hello! I'm{" "}
          <span className="text-orange-500 font-semibold">Mounesh</span>. I'm
          Professional Web Designer & <br />
          <span className="text-orange-500 font-semibold">
            Full Stack Web Developer
          </span>
          .
        </p>
        <p className="text-white my-5 text-base sm:text-lg leading-relaxed">
          I’m a passionate and curious Computer Science student with a strong
          interest in full-stack web development, problem-solving, and building
          impactful digital solutions. Currently pursuing my B.E. in Computer
          Science, I enjoy exploring modern technologies like React, Node.js,
          and MongoDB, while continuously learning and experimenting through
          real-world projects and hackathons. My focus is on creating clean,
          efficient, and user-friendly applications. Whether it's developing
          backend APIs or crafting intuitive frontend interfaces, I love turning
          ideas into working solutions. I believe in learning by doing and
          constantly pushing my boundaries to grow as a developer and innovator.
        </p>
      </div>

      {/* Right Section - Follow Me */}
      <div className="w-full md:w-1/5 flex flex-col items-center md:items-center md:mr-[70px]">
        <p
          ref={followMeRef}
          className="text-white font-bold text-4xl sm:text-5xl mb-2 text-center md:text-left"
        >
          Follow Me
        </p>
        <p className="text-orange-500 text-sm sm:text-base font-semibold mb-6 text-center md:text-left max-w-xs">
          Connect with me on social media platforms and let's build something
          amazing together!
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-2 gap-6 sm:gap-10 my-8">
          <a
            href="https://www.facebook.com/profile.php?id=61560451543825"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:rounded-4xl outline outline-2 outline-transparent hover:outline-orange-500 transition-all duration-300"
            ref={(el) => (iconsRef.current[0] = el)}
          >
            <img
              className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px]"
              src={facebook}
              alt="Facebook"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/mounesh-v-209476331/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:rounded-4xl outline outline-2 outline-transparent hover:outline-orange-500 transition-all duration-300"
            ref={(el) => (iconsRef.current[1] = el)}
          >
            <img
              className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px]"
              src={linkedin}
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://x.com/MouneshV96"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:rounded-4xl outline outline-2 outline-transparent hover:outline-orange-500 transition-all duration-300"
            ref={(el) => (iconsRef.current[2] = el)}
          >
            <img
              className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px]"
              src={twitter}
              alt="Twitter"
            />
          </a>

          <a
            href="https://github.com/Mounesh-v"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:rounded-4xl outline outline-2 outline-transparent hover:outline-orange-500 transition-all duration-300"
            ref={(el) => (iconsRef.current[3] = el)}
          >
            <img
              className="h-[70px] w-[70px] sm:h-[90px] sm:w-[90px]"
              src={github}
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
