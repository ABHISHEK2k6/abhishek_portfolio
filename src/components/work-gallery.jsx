"use client";

import { useEffect,useRef, useState, useMemo, useCallback } from "react";
import { ComputersCanvas } from "../components/canvas";
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
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef();

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Only load canvas when component is visible and after a delay
  useEffect(() => {
    if (!shouldRender) return;
    
    const timeout = setTimeout(() => setCanvasVisible(true), 1000);
    return () => clearTimeout(timeout);
  }, [shouldRender]);

  // Optimized image preloading
  const preloadImages = useCallback(() => {
    if (!shouldRender) return;
    
    const controller = new AbortController();
    const signal = controller.signal;

    workImages.forEach(({ src }) => {
      fetch(src, { signal, priority: 'low' })
        .catch(() => {}); // Silently handle errors
    });

    return () => controller.abort();
  }, [shouldRender]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // Memoized image rendering with optimized loading
  const renderedImages = useMemo(() => (
    workImages.map((image) => (
      <div
        key={image.id}
        className="aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-out hover:scale-105 hover:brightness-110"
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          style={{ contentVisibility: "auto" }}
        />
      </div>
    ))
  ), []);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen bg-primary py-12 px-6"
    >
      {shouldRender && (
        <>
          <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
            Showcase Gallery
          </h2>

          <div className="flex flex-col-reverse lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
              {renderedImages}
            </div>

            {/* Canvas Area - only render when visible */}
            <div className="w-full lg:w-2/5 h-[300px] lg:h-[600px]">
              <div className="w-full h-full rounded-lg overflow-hidden">
                {canvasVisible && (
                  <ComputersCanvas 
                    scale={0.8} // Reduced scale for better performance
                    position={[0, -1.5, 0]} // Adjusted position
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default SectionWrapper(WorkGallery, "gallery");