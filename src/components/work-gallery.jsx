"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "../components/canvas"; // Adjust the path as needed
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const workImages = [
  { id: 1, src: "/images/mars.jpg", alt: "Project 1" },
  { id: 2, src: "/images/room1.jpg", alt: "Project 2" },
  { id: 3, src: "/images/room2.jpg", alt: "Project 3" },
  { id: 4, src: "/images/room3.jpg", alt: "Project 4" },
  { id: 5, src: "/images/room4.jpg", alt: "Project 5" },
  { id: 6, src: "/images/room5.jpg", alt: "Project 6" },
  { id: 7, src: "/images/car.jpg", alt: "Project 7" },
  { id: 8, src: "/images/Scene.jpg", alt: "Project 8" },
  { id: 9, src: "/images/robot.jpg", alt: "Project 9" },
];

const WorkGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slideIn = (index) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    },
  });

  return (
    <section className="w-full min-h-screen bg-primary py-12 px-6">
      <motion.h2
        className={`${styles.sectionHeadText} text-center mb-10`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Showcase Gallery
      </motion.h2>

      <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-8 max-w-7xl mx-auto`}>
        {/* 🖼️ Image Grid */}
        <div className={`${isMobile ? "grid grid-cols-2" : "grid grid-cols-3"} gap-4 w-full sm:w-3/5`}>
          {workImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              variants={slideIn(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className={`w-full ${isMobile ? "h-[300px]" : "w-2/5 h-[600px]"}`}>
          <div className="w-full h-full rounded-lg overflow-hidden">
            <ComputersCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(WorkGallery, "");
