import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Grownt = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        Software Developer
        <span className="text-textGreen tracking-wide">
          (Interim Tech Lead → Full Stack Engineer)
        </span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          After an interim Tech Lead role, I returned to core development on two interconnected platforms sharing a unified architecture—prioritizing secure access control and reliable integrations so business teams could trust a single operational backbone.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Nexus: A secure business management platform that gives administrators one place to oversee clients, employees and company health—profits, debts and capital investments—replacing fragmented spreadsheets and ad-hoc reports with a centralized view for faster, evidence-based decisions.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Radar: An intelligent market analysis product powered by Gil, an AI assistant that delivers step-by-step recommendations (e.g., market viability in specific cities and opportunity fit). It automates research and application workflows, reducing operational bottlenecks by 30% and freeing managers from repetitive manual tasks.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Together, Nexus and Radar turn internal performance data and external market signals into actionable growth paths, helping the company manage operations securely while discovering and pursuing funding and expansion opportunities with less friction.
        </li>
      </ul>
    </motion.div>
  );
};

export default Grownt;
