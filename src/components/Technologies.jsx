import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript, SiNodedotjs, SiTailwindcss, SiFramer, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const techText = "Technologies".split("");

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        className="my-20 text-center text-4xl font-bold flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {techText.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            whileHover={{ y: -5, color: "#ff0080" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {[
          { component: RiReactjsLine, color: "text-cyan-400" },
          { component: SiJavascript, color: "text-yellow-400" },
          { component: SiNodedotjs, color: "text-green-500" },
          { component: SiTailwindcss, color: "text-blue-400" },
          { component: SiFramer, color: "text-pink-500" },
          { component: SiMongodb, color: "text-green-600" },
          { component: FaJava, color: "text-red-500" }
        ].map(({ component: Icon, color }, index) => (
          <motion.div
            key={index}
            className="relative flex items-center justify-center rounded-2xl border-4 border-neutral-800 p-6"
            whileHover={{ scale: 1.2, rotate: 10, borderColor: "#a855f7" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ scale: 1.4, rotate: 15 }}
            >
              <Icon className={`text-7xl ${color}`} />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full blur-2xl opacity-0 transition-all duration-300"
              whileHover={{
                opacity: 0.6,
                filter: "blur(15px)",
                backgroundColor: "rgba(168, 85, 247, 0.5)",
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-2xl bg-neutral-900 opacity-0"
              whileHover={{ opacity: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
