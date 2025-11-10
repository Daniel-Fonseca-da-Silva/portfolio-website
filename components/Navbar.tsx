import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import {
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
  BsGlobeAmericas,
} from "react-icons/bs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault;
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full h-16 sm:h-20 lg:h-[12vh] sticky top-0 z-50 glass backdrop-blur-md border-b border-textGreen/10 px-2 sm:px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-10 sm:w-12 md:w-14" src={logo} alt="Logo Dafon" />
        </motion.div>
        <div className="hidden md:inline-flex items-center gap-4 lg:gap-7">
          <ul className="flex text-xs sm:text-sm md:text-[13px] gap-3 md:gap-5 lg:gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <span className="text-textGreen/60">01.</span> About
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <span className="text-textGreen/60">02.</span> Experience
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            </Link>
            <Link
              href="#project"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <span className="text-textGreen/60">03.</span> Projects
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <span className="text-textGreen/60">04.</span> Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            </Link>
          </ul>
          <motion.a
            href="/assets/cv/developer.pdf"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-5 py-2.5 rounded-lg text-textGreen text-sm font-semibold border-2 border-textGreen hover:bg-hoverColor hover:border-textGreenHover duration-300 transition-all glow-green-hover"
          >
            CV
          </motion.a>
        </div>
        {/* Mobile Navbar */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={ref}
            onClick={handleClick}
            className="absolute md:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-center"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[85%] sm:w-[80%] h-full overflow-y-scroll scrollbarHide glass backdrop-blur-xl flex flex-col items-center px-4 sm:px-6 py-8 sm:py-10 relative border-l border-textGreen/20"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
              />

              <div className="flex flex-col items-center gap-6 sm:gap-7">
                <ul className="flex flex-col text-sm sm:text-base gap-5 sm:gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                      className="relative"
                    >
                      Home
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                      className="relative"
                    >
                      <span className="text-textGreen/60">01.</span> About
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                      className="relative"
                    >
                      <span className="text-textGreen/60">02.</span> Experience
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                      className="relative"
                    >
                      <span className="text-textGreen/60">03.</span> Projects
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative group"
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                      className="relative"
                    >
                      <span className="text-textGreen/60">04.</span> Contact
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"></span>
                    </motion.li>
                  </Link>
                </ul>
                <motion.a
                  href="/assets/cv/developer.pdf"
                  target="_blank"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, ease: "easeIn" }}
                  className="w-40 h-12 rounded-lg text-textGreen text-sm font-semibold border-2 border-textGreen hover:bg-hoverColor hover:border-textGreenHover duration-300 transition-all glow-green-hover flex items-center justify-center"
                >
                  CV
                </motion.a>
                <div>
                  <motion.a
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, ease: "easeIn" }}
                    href="https://wa.me/351913619053"
                    target="_blank"
                  >
                    <span className="mr-1 w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
                      <BsWhatsapp />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, ease: "easeIn" }}
                    href="https://github.com/Daniel-Fonseca-da-Silva"
                    target="_blank"
                  >
                    <span className="mr-1 w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
                      <BsGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/daniel-fonseca-da-silva/"
                    target="_blank"
                  >
                    <span className="mr-1 w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
                      <BsLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, ease: "easeIn" }}
                    href="http://www.dafon.online/"
                    target="_blank"
                  >
                    <span className="mr-1 w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
                      <BsGlobeAmericas />
                    </span>
                  </motion.a>
                </div>
                  <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, ease: "easeIn" }}
                  href="mailto:dafondeveloper@gmail.com"
                  className="text-xs sm:text-sm w-full max-w-[280px] sm:w-72 tracking-widest text-textGreen text-center mt-4 break-all"
                >
                  <p>dafondeveloper@gmail.com</p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
