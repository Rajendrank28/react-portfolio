import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const projectText = "Projects".split("");

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="text-center text-4xl mb-12 font-bold flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projectText.map((letter, index) => (
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
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex w-full max-w-2xl flex-col items-center text-center lg:flex-row lg:text-left rounded-lg border border-neutral-800 bg-neutral-900/50 shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:border-purple-500 hover:bg-neutral-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 40px rgba(168, 85, 247, 0.4)",
            }}
          >
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-[150px] h-[150px] rounded-lg shadow-lg"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="w-full lg:w-2/3 mt-4 lg:mt-0 lg:ml-6">
              <h6 className="text-lg mb-2 font-semibold text-white transition-all duration-300 hover:text-purple-500">
                {project.title}
              </h6>
              <p className="text-neutral-400 mb-2">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 transition-all duration-300 hover:bg-purple-600 hover:text-white"
                    whileHover={{ scale: 1.1 }}
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

export default Projects;
