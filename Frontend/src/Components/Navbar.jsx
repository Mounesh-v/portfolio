import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const lastScroll = useRef(0);
  const [scrolled, setScrolled] = useState(false);

  // Ref for Portfolio letters container
  const portfolioRef = useRef(null);

  useEffect(() => {
    // Ensure navbar is visible immediately
    gsap.set(navRef.current, { y: 0, opacity: 1 });

    // Animate in from top AFTER setting visibility
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    // LETTER BY LETTER ANIMATION on Portfolio text
    if (portfolioRef.current) {
      const letters = portfolioRef.current.querySelectorAll("span");

      // Timeline for infinite loop
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power1.inOut" },
      });

      // Animate letters one by one with stagger
      tl.to(letters, {
        duration: 0.5,
        opacity: 1,
        y: -10,
        stagger: 0.1,
        yoyo: true,
        repeat: 1,
      });

      return () => tl.kill();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 50) {
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      setScrolled(currentScroll > 50);
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(navRef.current, {
      backgroundColor: scrolled ? "#db6c31" : "#1f2937",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.3)" : "none",
      duration: 0.3,
      ease: "power1.out",
    });
  }, [scrolled]);

  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        gsap.fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [menuOpen]);

  const handleLinkHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      color: "#fb923c",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLinkHoverOut = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      color: "#d1d5db",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // Split Portfolio into spans for animation
  const portfolioText = "Mounesh V".split("").map((letter, index) => (
    <span
      key={index}
      style={{ opacity: 0, display: "inline-block", transformOrigin: "center" }}
    >
      {letter}
    </span>
  ));

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 top-0 backdrop-blur-md"
      style={{ backgroundColor: "#1f2937" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            {/* Wrap the portfolio text in a ref div */}
            <p
              ref={portfolioRef}
              className="text-4xl text-white font-bold tracking-wider cursor-pointer"
              style={{ userSelect: "none" }}
            >
              {portfolioText}
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-4 ml-auto">
            <a
              href="#home"
              onClick={()=>document.getElementById("home").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={()=>document.getElementById("about").scrollIntoView({behavior: "smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={()=>document.getElementById("skills").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="sm:hidden overflow-hidden"
        style={{
          height: 0,
          opacity: 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
        <a
              href="#home"
              onClick={()=>document.getElementById("home").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={()=>document.getElementById("about").scrollIntoView({behavior: "smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              About
            </a>
            <a
              href="#skills"
              onClick={()=>document.getElementById("skills").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})}
              className="text-gray-300 px-3 py-2 text-sm font-medium"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkHoverOut}
            >
              Contact
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
