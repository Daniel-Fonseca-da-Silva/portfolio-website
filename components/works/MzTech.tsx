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
        Back-end
        <span className="text-textGreen tracking-wide">Developer</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          At MzTech I helped ship MVP and SaaS products for national and international clients, working with design and business so each release was something teams could launch and operate with confidence, not just code handed over.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Sindical TR: A digital platform for a workers&apos; syndicate, replacing an aging system with one that supports new member services, stronger protection of sensitive data, and stable day to day operations. The client gained a product they could keep selling and extending instead of fighting a brittle legacy tool.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          US Drone Surveillance: An MVP for aerial monitoring and protection aimed at the United States market. The product had to turn drone feeds into trustworthy information that security and operations teams could act on, proving the concept for a new market without overpromising beyond what the first release could deliver.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Together, these engagements show how MzTech packaged software as market-ready products: modernizing an institutional client, opening a path in the US with a focused MVP, and repeating the SaaS playbook across borders.
        </li>
      </ul>
    </motion.div>
  );
};

export default MzTech;
