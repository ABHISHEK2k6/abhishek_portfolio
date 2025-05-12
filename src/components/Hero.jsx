import { motion } from "framer-motion";
import { blackhole, mainicondark } from "../assets";
import { styles } from "../styles";
import { RobotCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute -top-[15rem] -translate-y-[40px] left-0 w-full h-[calc(100%-60px)] object-cover z-0"
      >
        <source src={blackhole} type="video/webm" />
      </video>

      {/* 📱 Mobile Layout */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:hidden">
        {/* Background SVG */}
        <img
          src={mainicondark}
          alt="Background Icon"
          className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none"
        />

        {/* Foreground Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white">
            Hi, I'm <span className="text-[#915EFF]">Abhishek</span>
          </h1>
          <p className="mt-3 text-white text-lg">
            I develop 3D models,
            <br />
            Animations and web applications.
          </p>
        </div>

        {/* 🎯 3D Model on Mobile */}
        <div className="relative z-10 w-full h-[300px] mt-6">
          <RobotCanvas />
        </div>
      </div>

      {/* 💻 Desktop Layout */}
      <div className="relative z-10 w-full h-full hidden sm:block">
        {/* Right Side Icon */}
        <div className="absolute w-[40%] h-full right-0 z-[2] top-8 flex justify-center items-center">
          <motion.img
            src={mainicondark}
            alt="Main Icon"
            className="w-[30rem] h-[30rem] object-contain"
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Left Side Text + 3D Model */}
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-[1]`}
        >
          <div className="flex flex-row items-start gap-5 h-full">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915EFF]">Abhishek</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop 3D models,
                <br className="sm:block hidden" />
                Animations and web applications.
              </p>

              <div className="w-full h-[300px] sm:h-[400px]">
                <RobotCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-50 max-[420px]:bottom-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
