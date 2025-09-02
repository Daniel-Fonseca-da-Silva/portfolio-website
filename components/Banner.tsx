import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, I am
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Daniel Fonseca{" "}
        <span className="text-textDark mt-2 lgl:mt-4 text-4xl">
        Architect Engineer
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        I am an accomplished Software Engineer with over 5 years of experience in designing and delivering scalable, secure, and high-performance cloud applications on AWS. I possess strong expertise in Golang, Java, and TypeScript, and have successfully leveraged frameworks such as Gorm, Spring, Angular, Vue.js, and NestJS to build robust, enterprise-grade solutions. My focus is on creating efficient, maintainable, and resilient systems that drive business value and enhance user experience.{" "}
        <a href="https://github.com/Daniel-Fonseca-da-Silva" target="_blank">
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
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center cursor-pointer"
      >
        Check my company!
      </motion.a>
    </section>
  );
};

export default Banner;
