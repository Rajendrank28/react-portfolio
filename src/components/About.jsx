import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const aboutText = "About Me".split("");

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Title Animation */}
      <motion.h1
        className="my-20 text-center text-4xl font-bold flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {aboutText.map((letter, index) => (
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

      <div className="flex flex-wrap">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 p-8 flex justify-center">
          <motion.img
            className="rounded-2xl shadow-lg"
            src={aboutImg}
            alt="aboutimg"
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0px 10px 40px rgba(128, 0, 255, 0.4)",
            }}
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.p
            className="my-2 max-w-xl py-6 text-lg leading-relaxed text-neutral-300"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            {ABOUT_TEXT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
