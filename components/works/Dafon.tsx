import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Dafon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Founder
        <span className="text-textGreen tracking-wide">@Developer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Founder, corporate communication, software team leader.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I currently work with my company as a freelancer, learning new ways to
          create and negotiate technology projects. I mainly work with
          integrations, e-commerce, and MVP software development.
        </li>
      </ul>
    </motion.div>
  );
};

export default Dafon;
