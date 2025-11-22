import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const SmartSolutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        System Engineer
      </h3>
      <p className="text-sm md:text-lg mt-1 font-medium text-textDark">
        Oct 2025 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I work on the development and continuous improvement of a CMS project responsible for supporting high-visibility digital content and campaigns at one of Portugal's largest telecommunications groups.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Key Projects:

          CMS Platform: A centralized content management system designed to support digital content and campaigns with high visibility across multiple sectors. The solution enables agile activation and updating of campaigns and content for government, automotive, financial and retail sectors, as well as high-impact public initiatives like global events. The platform allows internal teams to manage and publish content quickly, securely, centrally and in a highly standardized manner, reducing operational times and increasing delivery reliability.
        </li>
      </ul>
    </motion.div>
  );
};

export default SmartSolutions;
