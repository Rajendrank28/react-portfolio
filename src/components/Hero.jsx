import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile (2).png";
import { HERO_CONTENT } from "../constants";

const name = "Rajendra Naik".split("");
const title = "Front End Developer".split("");

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center min-h-[400px]">
        {/* Left Section - Name, Title, and Description */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start h-full">
          {/* Animated Name */}
          <motion.h1 
            className="pb-6 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl flex"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {name.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{ y: -5, color: "#ff0080" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Title with Gradient */}
          <motion.span 
            className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light flex"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {title.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                whileHover={{ y: -5, color: "#ff0080" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>

          {/* Animated Description */}
          <motion.p 
            className="my-4 max-w-xl py-6 font-light tracking-tighter text-neutral-300 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Right Section - Animated Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-8 h-full">
          <motion.img 
            src={profilePic} 
            alt="Rajendra Naik" 
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg border-4 border-purple-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 10px 40px rgba(255, 0, 128, 0.6)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
