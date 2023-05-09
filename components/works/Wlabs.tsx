import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Wlabs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Back
        <span className="text-textGreen tracking-wide">@Developer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I work as a Back-end Developer at MzTech, a company dedicated to
          creating national and international MVP software. I use technologies
          such as NestJS, Node, Java, Spring, PostGreSQL, Redis, PrismaORM,
          Micro-services, REST API creation, Jest, and other similar
          technologies.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          My responsibilities include developing and maintaining the back-end of
          the systems to ensure the efficiency and security of the application.
          I work as a team with my partner and collaborate with other areas of
          the company, such as Designers and Business Analysts, to meet the
          needs and requirements of customers, thus ensuring the quality of the
          final product.
        </li>
      </ul>
    </motion.div>
  );
};

export default Wlabs;
