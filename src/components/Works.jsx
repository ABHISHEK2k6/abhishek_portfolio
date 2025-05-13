import React, { memo, useMemo, useEffect, useState, useRef } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Optimized tilt component with gradient border
const TiltCard = ({ children, className }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const animationRef = useRef();
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    cancelAnimationFrame(animationRef.current);
    
    animationRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setTilt({
        x: y * 8, // Vertical tilt
        y: -x * 8 // Horizontal tilt
      });
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(animationRef.current);
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${className} relative p-[3px] rounded-2xl`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.02)`,
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
        background: 'linear-gradient(to bottom, #00cea8, #bf61ff)'
      }}
    >
      <div className="bg-tertiary rounded-xl h-full w-full">
        {children}
      </div>
    </div>
  );
};

const ProjectCard = memo(({ index, name, description, tags, image, source_code_link }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef();

  // Image loading with timeout fallback
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoaded(true);
    
    const timeout = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timeout);
  }, [image]);

  // Memoize the tags rendering
  const renderedTags = useMemo(() => (
    tags.map((tag) => (
      <p key={`${name}-${tag.name}`} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
        #{tag.name}
      </p>
    ))
  ), [tags, name]);

  return (
    <div 
      ref={cardRef}
      className="w-full sm:w-[360px] animate-fade-in"
      style={{
        animationDelay: `${index * 50}ms`,
        opacity: 0
      }}
    >
      <TiltCard className="h-full">
        <div
          className="relative w-full h-[180px] sm:h-[230px] cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <img
            src={image}
            alt="project"
            loading="lazy"
            decoding="async"
            width={360}
            height={230}
            className={`w-full h-full rounded-xl transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${name === "MediaCon News Website" ? "object-contain" : "object-cover"}`}
            style={{ 
              contentVisibility: 'auto',
              background: isLoaded ? 'none' : 'linear-gradient(90deg, #1a1a2e 0%, #16213e 100%)'
            }}
          />
          <div className="absolute inset-0 flex justify-end m-3">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
              <img 
                src={github} 
                alt="source code" 
                className="w-1/2 h-1/2 object-contain" 
                loading="lazy"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 px-3">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 px-3 pb-3">
          {renderedTags}
        </div>
      </TiltCard>
    </div>
  );
});

const Works = () => {
  const containerRef = useRef();

  return (
    <div ref={containerRef} className="relative">
      <div className="text-center">
        <p className={`${styles.sectionSubText} animate-fade-in`}>My work</p>
        <h2 className={`${styles.sectionHeadText} animate-fade-in`} style={{ animationDelay: '50ms' }}>
          Projects.
        </h2>
        <p 
          className="mt-3 text-secondary text-[14px] sm:text-[16px] max-w-3xl leading-[24px] mx-auto animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          Following projects showcase my skills and experience through real-world examples. 
          Each project includes links to the code or demo and highlights my ability to 
          solve complex problems and work with different technologies.
        </p>
      </div>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-8 justify-evenly">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");