import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowFloating(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      techs: technologies.filter(tech =>
        ["HTML 5", "CSS 3", "JavaScript", "TypeScript", "React JS", "Tailwind CSS"].includes(tech.name)
      )
    },
    {
      title: "3D & Design",
      techs: technologies.filter(tech =>
        ["Blender", "Three JS", "Figma", "Zmodeler"].includes(tech.name)
      )
    },
    {
      title: "Backend & Tools",
      techs: technologies.filter(tech =>
        ["Python", "C", "git", "MySQL"].includes(tech.name)
      )
    }
  ];

  return (
    <div className="relative">
      <div className="text-center">
        <p className={`${styles.sectionSubText}`}>What I work with</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Tech Stack.</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {techCategories.map((category, index) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
            transitionSpeed={600}
            className="flex flex-col justify-between bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 w-full min-h-[480px]"
          >
            <h3 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4 flex-grow">
              {category.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 rounded-lg bg-black/30 backdrop-blur-md hover:bg-black/40 transition hover:scale-105"
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      loading="lazy"
                      className={`w-full h-full object-contain ${tech.name === "Three JS" ? "invert" : ""}`}
                    />
                  </div>
                  <p className="text-sm text-center text-gray-200">{tech.name}</p>
                </div>
              ))}
            </div>
          </Tilt>
        ))}
      </div>

      {/* Simplified floating icons without animation */}
      {showFloating && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-10">
          {technologies.slice(0, 12).map((tech, index) => {
            const size = 24 + Math.random() * 32;
            return (
              <div
                key={`floating-${tech.name}-${index}`}
                className="absolute blur-lg"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  loading="lazy"
                  className={`w-full h-full object-contain ${tech.name === "Three JS" ? "invert" : ""}`}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper( Tech, "tech");