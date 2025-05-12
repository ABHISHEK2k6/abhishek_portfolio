import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import Tilt from "react-parallax-tilt";

const Tech = () => {
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
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I work with</p>
        <h2 className={`${styles.sectionHeadText} text-white text-center`}>Tech Stack.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", "spring", categoryIndex * 0.2, 0.75)}
            className="flex"
          >
            <Tilt
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
                {category.techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center p-4 rounded-lg bg-black/30 backdrop-blur-md hover:bg-black/40 transition"
                  >
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`w-full h-full object-contain ${tech.name === "Three JS" ? "invert" : ""}`}
                      />
                    </div>
                    <p className="text-sm text-center text-gray-200">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>



      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {technologies.map((tech, index) => {
          const size = 24 + Math.random() * 32;
          return (
            <motion.div
              key={`floating-${tech.name}-${index}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.08,
              }}
              animate={{
                x: [null, Math.random() * window.innerWidth],
                y: [null, Math.random() * window.innerHeight],
                transition: {
                  duration: 30 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="absolute blur-lg"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={`w-full h-full object-contain ${tech.name === "Three JS" ? "invert" : ""}`}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
