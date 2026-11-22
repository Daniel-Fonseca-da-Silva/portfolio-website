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
        <span className="text-textGreen tracking-wide">
          (Full-Cycle Engineer)
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
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          After an interim Tech Lead role, I transitioned back to a core developer position focusing on two platforms sharing a unified architecture. I prioritized security, access management, and robust integrations across both systems.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Nexus: A highly secure business management platform for admins to track clients, employees, detailed company metrics, profits, debts, and capital investments.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Radar: An intelligent market analysis tool powered by an AI named &quot;Gil&quot;. It provides step-by-step automated recommendations (e.g., market viability in specific cities), reducing operational bottlenecks by 30% and decreasing manual managerial tasks.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Converted Figma prototypes into responsive interfaces using Next.js and Tailwind CSS, implementing robust data validation with Zod.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Developed secure REST endpoints in Java using the Spring Boot ecosystem, while maintaining and evolving a robust Java codebase with Hibernate, JPA, Tomcat, Maven, Lombok, and slf4j. Documented all APIs via Swagger.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Led the integration of the &quot;Gil&quot; AI (migrated from Java to Python) to process complex market data.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Managed PostgreSQL databases, writing advanced SQL queries and utilizing Prisma for the Next.js stack and Spring Data JPA for the Java ecosystem.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Configured strict Role-Based Access Control (RBAC) and seamless authentication/authorization flows using Keycloak, ensuring security and compliance across all layers.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Containerized microservices with Docker, orchestrated via Kubernetes on Linux, and configured persistent volumes for secure MinIO storage.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Authored comprehensive unit tests to ensure code quality. Collaborated under Scrum, Kanban, and XP methodologies, managing tasks via Jira and CI/CD pipelines in Gitlab.
        </li>
      </ul>
    </motion.div>
  );
};

export default Grownt;
