import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-8 sm:py-10 md:py-16 lg:py-24 flex flex-col gap-3 sm:gap-4 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-sm sm:text-base md:text-lg font-titleFont tracking-wide text-textGreen font-medium"
      >
        Hello, I&apos;m
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-titleFont font-bold flex flex-col leading-tight"
      >
        <span className="gradient-text">Daniel Fonseca</span>
        <span className="text-textLight mt-2 sm:mt-3 lg:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Software Engineer & Architect
        </span>
      </motion.h1>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base sm:text-lg md:max-w-[700px] text-textDark font-normal leading-relaxed mt-4 sm:mt-6 flex flex-col gap-4"
      >
        <p>
          For more than ten years I have designed and scaled high-availability systems from the ground up. At enterprise companies such as MEO Altice and Leroy Merlin, I turn demanding business problems into dependable cloud-native platforms on AWS, backed by well-designed REST APIs.
        </p>
        <p>
          I own the full delivery cycle: architecture, secure development, DevOps, and production. I also connect your existing systems with AI agents so integrations stay practical and teams move faster without giving up stability. Go, Python, microservices, REST APIs, and event-driven messaging with RabbitMQ are where I do my strongest work.
        </p>
        <p>
          As Founder and CTO of Dafon Online, I lead engineering and product delivery with the same focus I bring to client work: clear priorities, solid architecture, and digital products built to grow with the business.{" "}
          <a href="https://www.linkedin.com/in/daniel-fonseca-da-silva/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-textGreen hover:text-textGreenHover transition-colors duration-300 inline-flex items-center gap-1 group">
            <span className="relative">
              Know more
              <span className="absolute w-full h-[2px] bg-gradient-to-r from-textGreen to-accentBlue left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8"
      >
        <a
          href="https://www.dafon.online"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full sm:w-56 h-14 text-sm font-titleFont border-2 border-textGreen rounded-lg text-textGreen tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center cursor-pointer overflow-hidden glow-green-hover"
        >
          <span className="relative z-10 flex items-center gap-2">
            Know my company
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-textGreen/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
        </a>
        <a
          href="/assets/cv/developer.pdf"
          target="_blank"
          className="group w-full sm:w-56 h-14 text-sm font-titleFont bg-textGreen text-bodyColor rounded-lg tracking-wide hover:bg-textGreenHover duration-300 flex items-center justify-center cursor-pointer font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          <span className="flex items-center gap-2">
            Download CV
            <span className="group-hover:translate-y-[-2px] transition-transform duration-300">↓</span>
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Banner;
