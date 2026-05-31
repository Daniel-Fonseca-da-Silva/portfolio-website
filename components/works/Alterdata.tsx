import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Alterdata = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Software Developer
        <span className="text-textGreen tracking-wide">@Alterdata</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I worked at Alterdata on a startup initiative building innovative, Uber-like software for 24 hour self service travel terminals across the United States. The platform helped operators guide passengers with accurate geospatial context, hotel placement and multimodal ticketing across rail, road, air and sea so a single terminal could sell a complete journey instead of fragmented tickets.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          GeoTicket: An intelligent product that let millions of users follow trip status and travel spending in real time with steady updates they could trust. It was designed to stay available and secure at scale so travelers always knew where they stood financially and operationally during complex trips.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Together, the terminal platform and GeoTicket gave Alterdata a differentiated software package for the American mobility market: operators could run modern self service hubs while end users gained transparency that supported repeat use and confidence in the brand. That combination strengthened what Alterdata could sell and renew as a product led company rather than a one off project.
        </li>
      </ul>
    </motion.div>
  );
};

export default Alterdata;
