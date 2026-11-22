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
        <span className="text-textGreen tracking-wide">
          (Full-Cycle Engineer)
        </span>
      </h3>
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
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Payment Orchestration Platform Spain
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Designed and documented a distributed payment platform enabling store staff to collect remote order payments via PinPad, payment links, bank transfers and vouchers.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Architected and mapped six microservices (web, BFF, core API, status-sync, scheduler and reminder services) integrating event-driven flows (Pub/Sub, Cloud Scheduler, Kafka) with internal ERP, quotation and external payment gateways, alongside a 13-state order lifecycle.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Led the frontend modernization and security hardening of the payment web application, upgrading Vue (2.7) and migrating Bootstrap (4 to 5) while removing legacy dependencies (jQuery, Popper.js, Moment.js).
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Reduced production JS bundle size by 13.3% (-442 KiB), cut production dependency vulnerabilities by 78% and eliminated direct DOM manipulation.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Expanded automated test coverage across critical payment workflows (+14 suites, +254 tests; ~83% line coverage), resolving high-impact edge-case bugs in payment status validation and store configuration and delivering a technical roadmap for Vue 3 / Vite.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Diagnosed UAT payment failures across API and messaging flows, optimized MongoDB query performance via compound indexes, and managed environment secrets and external API subscriptions.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Inventory Discrepancy Management System: Analyzed a Java 11/17 Spring Boot ecosystem tracking store inventory discrepancies across frontend, BFF, API, Knative and Kafka Connect.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Traced item lookup bottlenecks, identified upstream timeout dependencies, and mapped a multi-environment GCP cloud migration (DEV to PROD) including MongoDB Atlas and Datadog observability.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Electronic Invoice Archiving Pipeline: Documented an event-driven GCP pipeline (EDI, BigQuery, Cloud Storage, Pub/Sub, Cloud Run, GKE) generating standardized PDFs for compliant cloud archiving. Provided L1 production support, retry-queue monitoring, and Datadog alerting.
        </li>
      </ul>
    </motion.div>
  );
};

export default LeroyMerlin;
