import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const contactText = "Get In Touch".split("");

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 flex flex-col items-center">
      {/* Animated Gradient Heading with Letter Hover Effect */}
      <motion.h1
        className="text-center my-10 text-4xl font-bold flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {contactText.map((letter, index) => (
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

      {/* Contact Details Section */}
      <div className="text-center tracking-tight text-lg text-neutral-300 space-y-4">
        <motion.p
          className="hover:text-purple-400 transition duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          📍 {CONTACT.address}
        </motion.p>

        <motion.p
          className="hover:text-blue-400 transition duration-300"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          📞 {CONTACT.phoneNo}
        </motion.p>

        {/* Email Link with Hover and Glowing Effect */}
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="relative inline-block text-purple-300 hover:text-purple-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          ✉️ {CONTACT.email}
          <motion.span
            className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 scale-x-0 transition-transform duration-300 origin-left"
            whileHover={{ scaleX: 1 }}
          ></motion.span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
