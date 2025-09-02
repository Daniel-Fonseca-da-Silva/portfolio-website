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
        <span className="text-textGreen tracking-wide">
        Software Developer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Aug 2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          With my experience in system development and e-commerce platforms, I played a key role in building and optimizing online stores, integrating payment gateways (including PayPal), and ensuring data security compliance.

          I led MVP development using modern backend technologies, cloud infrastructure, and AI, focusing on scalability and high performance. I also created custom scheduling plugins and implemented efficient APIs for external database communication.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Key Projects
          'El Chaco' AI-powered SaaS for startups to streamline business management and accelerate growth.
          'Dental Care'  A dental practice platform with 3D modeling for tracking orthodontic progress via photo comparisons.
        </li>
      </ul>
    </motion.div>
  );
};

export default Exosfera;
