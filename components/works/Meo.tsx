import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Meo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-sm md:text-lg xl:text-lg font-titleFont">
        <span className="text-textGreen tracking-wide">
          (Full-Cycle Engineer)
        </span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I work on the continuous improvement of digital products used by one of Portugal&apos;s largest telecommunications groups, helping business teams ship content and policy changes with less dependence on engineering for every update.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          CMS Renault and Dacia: A multi tenant back office that lets Renault and Dacia teams manage pages, copy and media across their digital estate from one place. Marketing and the dealer network can refresh vehicle launches and promotional offers without waiting for full site rebuilds, so campaigns go live faster and stay consistent across channels.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Madeira Island subsidies: An administrative platform for the Regional Government of Madeira to run subsidy programs with stronger control. Officials can review imported citizen documents, validate eligibility against contributions and flag duplicate or improper claims so public support reaches people who qualify and misuse is caught earlier.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Together, these products put day to day control in the hands of the teams closest to customers and citizens, while keeping sensitive content and compliance workflows reliable at scale.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I work on the development and continuous improvement of a Content Management platform supporting high-visibility digital campaigns at one of Portugal&apos;s largest telecommunications groups, focusing on Security, Performance, and Scalability.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          CMS Renault / Dacia: Centralized system powering Renault&apos;s digital ecosystem, enabling agile activation and real-time backend updates for vehicle launches and offers across the dealer network.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Madeira Island: Secure platform for managing government subsidies, leveraging N8N for document import/analysis automation and PostgreSQL databases to detect fraud and validate citizen eligibility.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Designed and built scalable backend services and REST APIs using Java, Spring WebFlux, and Claude Code, integrating AI assistants via MCP to automate context gathering and streamline workflows. Architected high-throughput solutions using Reactive Programming, Java Concurrency and Redis caching.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Leveraged GitHub Copilot and Claude Code to automate complex SQL Server migrations and accelerate testing, achieving 90% code coverage with JUnit and Mockito and reducing manual errors by 50%.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Set up development environments using Windows, WSL, and Linux. Optimized Docker images via multi-stage builds and deployed containerized Java services on Google Cloud Platform (GCP) using Kubernetes (GKE).
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Managed clusters and workloads in GCP to ensure high availability, utilizing Cloud Logging for centralized log analysis, monitoring and production troubleshooting.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Analyzed functional and business requirements prior to designing technical solutions. Enforced engineering standards through AI-assisted code reviews and PR approvals in GitHub, collaborating with QA and Delivery Lead, Business Analyst and Architect under Scrum and Kanban flow.
        </li>
      </ul>
    </motion.div>
  );
};

export default Meo;
