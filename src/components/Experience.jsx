import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const experienceText = "Experience".split("");

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 text-center">
      <motion.h1
        className="my-20 text-4xl font-bold flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {experienceText.map((letter, index) => (
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

      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex w-full max-w-3xl flex-wrap justify-start p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 shadow-lg transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:bg-neutral-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 40px rgba(168, 85, 247, 0.4)",
            }}
          >
            <div className="w-full lg:w-1/4 text-left">
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                whileHover={{ color: "#ff0080" }}
              >
                {experience.year}
              </motion.p>
            </div>

            <div className="w-full lg:w-3/4 text-left">
              <h6 className="mb-3 font-semibold flex flex-wrap">
                <motion.span
                  className="mr-1 transition-all duration-300 cursor-pointer"
                  whileHover={{ color: "#ff0080" }}
                >
                  {experience.role}
                </motion.span>
                -
                <motion.span
                  className="ml-1 text-sm text-purple-100 transition-all duration-300 cursor-pointer"
                  whileHover={{ color: "#ff0080" }}
                >
                  {experience.company}
                </motion.span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              
              {/* Technologies Section */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="relative flex items-center justify-center px-3 py-1 rounded-lg text-sm font-medium text-purple-300 bg-neutral-900 border border-purple-800 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-400"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 10px rgba(168, 85, 247, 0.6)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
