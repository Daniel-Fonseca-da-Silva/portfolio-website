import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const LeroyMerlin = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Software Developer
      </h3>
      <p className="text-sm md:text-lg mt-1 font-medium text-textDark">
        Dec 2024 - Jul 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I work on the backend development of an MVP based on a legacy system, using Golang and Java, along with the Gin and Spring Boot frameworks and a REST API architecture. I am responsible for integrating with external systems, including payment methods, receipt printers, and order queue management via Google Pub/Sub.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Key Projects:

        PPC Leroy: A scalable and robust payment orchestration system designed to modernize and optimize existing payment methods. The solution was built to support a reliable, high-performance infrastructure capable of managing payment queues and parallel transactions across thousands of stores, serving millions of employees with consistency and fault tolerance.
        </li>
      </ul>
    </motion.div>
  );
};

export default LeroyMerlin;
