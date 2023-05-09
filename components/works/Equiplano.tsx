import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Equiplano = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        FullStack
        <span className="text-textGreen tracking-wide">@Developer</span>
      </h3>
      <p className="text-sm md:text-lg mt-1 font-medium text-textDark">
        Dez 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I worked as a Fullstack Developer at Equiplano, a company in the state
          of Paraná that focuses on creating public management software for the
          entire state and its main cities. I used technologies such as Java,
          Spring, Hibernate, Angular, TypeScript, OracleBD, PostGreSQL,
          Firebird, JPA, DevExtreme, Nebular Framework, Bootstrap, HTML5,
          JavaScript, and CSS3 for both client and server-side development.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          My responsibilities included developing new features, maintaining and
          improving existing systems, ensuring code quality and information
          security. I worked in a team with other developers and collaborated
          with other departments to meet client needs and ensure user
          satisfaction.
        </li>
      </ul>
    </motion.div>
  );
};

export default Equiplano;
