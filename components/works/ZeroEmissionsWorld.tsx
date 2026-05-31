import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const ZeroEmissionsWorld = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Cloud Architect
        <span className="text-textGreen tracking-wide">
          (Lead Developer)
        </span>
      </h3>
<ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Led cloud architecture and end-to-end development of a global social-impact platform, working alongside an international team to build a system capable of managing, funding, and supporting charitable projects with stable access and secure handling of financial data.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Zero Emissions World is a philanthropic platform that connects international donors, NGOs, and volunteers in one place—providing real-time fund tracking, project matching, and automated resource distribution so money reaches communities and causes with full transparency.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          For donors, the platform builds trust through end-to-end traceability of every contribution. For NGOs, it reduces manual coordination and administrative overhead. For communities, it means more predictable and timely access to the support they need.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          The infrastructure was designed to operate at global scale with controlled costs, enabling continuous delivery and consistent quality across a distributed team—turning agile collaboration into a competitive advantage rather than a logistical challenge.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Zero Emissions World stands as a platform asset that sustains the organisation&apos;s mission: the more efficiently resources flow from donor to cause, the greater the social impact the company can deliver and the faster it can grow.
        </li>
      </ul>
    </motion.div>
  );
};

export default ZeroEmissionsWorld;
