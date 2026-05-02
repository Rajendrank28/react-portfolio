import { FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 flex h-12 items-center justify-between px-4">
      {/* Logo Section - Replaced with 'Rj' with Styles */}
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-110 hover:rotate-3">
          Rj
        </h1>
      </div>

      {/* Social Icons with Clickable Links */}
      <div className="flex items-center justify-center gap-6 text-2xl">
        {[
          { Icon: FaLinkedin, color: "text-blue-500 hover:text-blue-700", link: "https://www.linkedin.com/in/rajendra-naik-7b0bb7257" },
          { Icon: FaGithub, color: "text-gray-500 hover:text-gray-700", link: "https://github.com/Rajendrank28" },
          { Icon: FaSquareXTwitter, color: "text-black hover:text-gray-900", link: "https://twitter.com/Rajendrank28" },
          { Icon: FaInstagram, color: "text-pink-500 hover:text-pink-700", link: "https://instagram.com/rajendra__nk" },
        ].map(({ Icon, color, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-125 hover:rotate-6"
          >
            <Icon className={`cursor-pointer ${color}`} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
