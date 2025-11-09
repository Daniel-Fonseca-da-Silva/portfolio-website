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
        className="text-sm sm:text-base md:text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, I am
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Daniel Fonseca{" "}
        <span className="text-textDark mt-1 sm:mt-2 lg:mt-4 text-2xl sm:text-3xl md:text-4xl">
        System Engineer
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-sm sm:text-base md:max-w-[650px] text-textDark font-medium leading-relaxed"
      >
        {" "}
        I am an accomplished Software Engineer with over 5 years of experience in designing and delivering scalable, secure, and high-performance cloud applications on AWS. I possess strong expertise in Golang, Java, and TypeScript, and have successfully leveraged frameworks such as Gorm, Spring, Angular, Vue.js, and NestJS to build robust, enterprise-grade solutions. My focus is on creating efficient, maintainable, and resilient systems that drive business value and enhance user experience.{" "}
        <a href="https://www.linkedin.com/in/daniel-fonseca-da-silva/" target="_blank">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-hidden group">
            Know More
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.a
        href="http://www.dafon.online"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-full sm:w-52 h-12 sm:h-14 text-xs sm:text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center cursor-pointer"
      >
        Check my company!
      </motion.a>
    </section>
  );
};

export default Banner;
