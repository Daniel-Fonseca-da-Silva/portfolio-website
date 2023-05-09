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
        <span className="text-textGreen tracking-wide">@Developer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Nov 2021</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I worked at São Paulo-based startup focused on creating software
          similar to Uber that was designed to be used in 24-hour machines
          similar to 24-hour ATMs in the United States.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          This system involved 3D mapping issues via maps of passenger
          locations, management of railroad, road, air, and sea tickets.
        </li>
      </ul>
    </motion.div>
  );
};

export default MzTech;
