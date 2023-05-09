import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Exosfera = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Partner &
        <span className="text-textGreen tracking-wide">@Developer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I am a partner in the company Exosfera, which specializes in marketing
          and e-commerce creation. My main tasks include talking to national and
          international clients, contacting potential clients, providing support
          for Brazil, and working as a front-end and back-end developer.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          In addition, I develop projects, study the implementation of new
          systems and technologies, participate in meetings to improve the
          company, hire new employees, and manage their tasks. I am an important
          member of the team and play a vital role in ensuring that the company
          meets the needs of clients and stays up-to-date with technological
          trends.
        </li>
      </ul>
    </motion.div>
  );
};

export default Exosfera;
