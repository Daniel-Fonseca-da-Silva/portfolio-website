import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const MzTech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Back
        <span className="text-textGreen tracking-wide">Software Developer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Feb 2016 - Oct 2019</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          As a Back-end Developer at MzTech, I specialized in creating MVP and SaaS software for national and international markets. I worked extensively on a drone surveillance project for the American market, focusing on aerial protection systems.

          My responsibilities included developing and maintaining the back-end layer, ensuring application efficiency and security. I collaborated with Designers and Business Analysts to deliver high-quality solutions that met client requirements.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Key Projects:
          'Sindical TR' Led the migration of a legacy PHP system to a modern Java/Spring Boot solution syndicate, including development of new feature, implementation of enhanced security measures and ongoing maintenance and post-migration optimization, architecture modernization to microservices.
        </li>
      </ul>
    </motion.div>
  );
};

export default MzTech;
