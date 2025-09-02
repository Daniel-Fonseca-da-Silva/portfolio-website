import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Equiplano = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        FullStack
        <span className="text-textGreen tracking-wide">@Developer</span>
      </h3>
      <p className="text-sm md:text-lg mt-1 font-medium text-textDark">
        Feb 2021 - Dec 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I worked at Equiplano, a company specialized in developing public management systems. During my time there, I was responsible for serving several cities in the state of Paraná, developing software to meet the needs of city halls and improve local public management. I had the opportunity to work on three main systems:
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Key Projects:

          &apos;Conta&apos; (Account) A system for managing permissions for various users and administrators of other systems.

          &apos;Almoxarifado&apos; (Warehouse) A system focused on managing supplies and vehicles allocated in warehouses, covering their entire life cycle.

          &apos;EProcesso&apos; (E-Process) The company&apos;s main system, focused on managing all processes initiated in the city hall, from start to finish.
        </li>
      </ul>
    </motion.div>
  );
};

export default Equiplano;
