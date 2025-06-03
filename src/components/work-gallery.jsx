"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { RobotCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const workImages = [
  { id: 1, src: "/images/Scene.jpg", alt: "Project 1" },
  { id: 2, src: "/images/room2.jpg", alt: "Project 2" },
  { id: 3, src: "/images/room1.jpg", alt: "Project 3" },
  { id: 4, src: "/images/room5.jpg", alt: "Project 4" },
  { id: 5, src: "/images/room4.jpg", alt: "Project 5" },
  { id: 6, src: "/images/room3.jpg", alt: "Project 6" },
  { id: 7, src: "/images/mars.jpg", alt: "Project 7" },
  { id: 8, src: "/images/robot.jpg", alt: "Project 8" },
  { id: 9, src: "/images/car.jpg", alt: "Project 9" },
];

const WorkGallery = () => {
  const [canvasVisible, setCanvasVisible] = useState(false);

  useEffect(() => {
    // Delay canvas rendering for performance
    const timeout = setTimeout(() => setCanvasVisible(true), 600);
    return () => clearTimeout(timeout);
  }, []);

  // Preload all images on mount
  const preloadImages = useCallback(() => {
    workImages.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // Render grid of images with hover effects
  const renderedImages = useMemo(() => (
    workImages.map((image) => (
      <div
        key={image.id}
        className="aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-110 hover:brightness-110"
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    ))
  ), []);

  return (
    <section className="w-full min-h-screen bg-primary py-12 px-6">
      <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
        Showcase Gallery
      </h2>

      <div className="flex flex-col-reverse lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
          {renderedImages}
        </div>

        {/* Canvas Area */}
        <div className="w-full lg:w-2/5 h-[300px] lg:h-[600px]">
          <div className="w-full h-full rounded-lg overflow-hidden">
            {canvasVisible && <RobotCanvas />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(WorkGallery, "gallery");
