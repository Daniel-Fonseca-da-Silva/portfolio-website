import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const GtGroup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Founder
        <span className="text-textGreen tracking-wide">Softwarer Developer & Teach Lead</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Sep 2023 - Dec 2024</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          After serving as an interim Tech Lead, I joined another Nexus project team, contributing to the delivery of new features and resolution of critical issues in a highly secure system. I focused on key areas including security and front-end communication, access management, and data encryption to ensure compliance and protection of confidential information.

          After the leadership period, I returned to my role as a developer, focusing on the ongoing maintenance of Radar and joining the team responsible for the Nexus project.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          After the leadership period, I returned to my role as a developer, focusing on the ongoing maintenance of Radar and joining the team responsible for the Nexus project.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          &apos;Nexus&apos; A business management platform that delivers insights into operations, capital investments, and the resources required for strategic company growth.

          &apos;Radar&apos; An AI-powered system designed to help entrepreneurs create tailored business models based on their industry, company size, and target market across various European countries.
        </li>
      </ul>
    </motion.div>
  );
};

export default GtGroup;
