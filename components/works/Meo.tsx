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
        <span className="text-textGreen tracking-wide">
          (Full Stack Engineer → System Architect)
        </span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I work on the continuous improvement of digital products used by one of Portugal&apos;s largest telecommunications groups, helping business teams ship content and policy changes with less dependence on engineering for every update.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          CMS Renault and Dacia: A multi tenant back office that lets Renault and Dacia teams manage pages, copy and media across their digital estate from one place. Marketing and the dealer network can refresh vehicle launches and promotional offers without waiting for full site rebuilds, so campaigns go live faster and stay consistent across channels.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Madeira Island subsidies: An administrative platform for the Regional Government of Madeira to run subsidy programs with stronger control. Officials can review imported citizen documents, validate eligibility against contributions and flag duplicate or improper claims so public support reaches people who qualify and misuse is caught earlier.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Together, these products put day to day control in the hands of the teams closest to customers and citizens, while keeping sensitive content and compliance workflows reliable at scale.
        </li>
      </ul>
    </motion.div>
  );
};

export default Meo;
