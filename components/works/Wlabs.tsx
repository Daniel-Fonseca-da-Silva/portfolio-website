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
        <span className="text-textGreen tracking-wide">
        Software Developer</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Oct 2019 - Jan 2021</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Worked on a startup project developing innovative software similar to Uber for 24-hour terminals in the United States. The system addressed geospatial mapping, passenger location, hotel management, and ticket issuance for various transportation modes.

          I worked with cutting-edge technologies including Node.js with NestJS framework, REST APIs, Jest for testing, AWS microservices, MySQL database, and GraphQL. Despite joining near the project's end, I gained extensive experience with modern technologies.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Key Projects:

          'GeoTicket' - An intelligent and innovative system that enables millions of users to securely and efficiently track their trip statuses and expenses in real time. The platform provides continuous feedback while ensuring high availability, stability, and security at scale.
        </li>
      </ul>
    </motion.div>
  );
};

export default Wlabs;
