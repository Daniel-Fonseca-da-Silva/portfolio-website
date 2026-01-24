import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Meo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        System Architect
      </h3>
      <p className="text-sm md:text-lg mt-1 font-medium text-textDark">
        Oct 2025 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I work on the development and continuous improvement of a CMS project responsible for supporting high-visibility digital content and campaigns at one of Portugal&apos;s largest telecommunications groups.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Key Projects:

          CMS Renault: A centralized content management system (CMS) tailored to power Renault digital ecosystem and high-visibility marketing campaigns. The solution enables agile activation and real-time updates for vehicle launches, promotional offers, and brand content across the dealer network and digital platforms.
          
         Madeira Island: A centralized system for managing government subsidies in Madeira Island. The platform automates document import and analysis, detects fraud, and validates citizen eligibility based on their government contributions.
        </li>
      </ul>
    </motion.div>
  );
};

export default Meo;
