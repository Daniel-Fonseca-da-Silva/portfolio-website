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
        <span className="text-textGreen tracking-wide">(Software Engineer)</span>
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
          Specialized in MVP and SaaS software for global markets, including a US drone based aerial surveillance project.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Built backend applications in Java (8+), Java EE and Spring Boot, applying backend service design principles, Maven and Lombok.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Modernized legacy PHP code to Java / Spring Boot microservices, cutting server response time by 20% through JVM tuning and Spring Data optimization.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Designed relational databases (Oracle, PostgreSQL) with Redis caching, working with business analysts and product owners to translate requirements into solutions.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Containerized applications with Docker, supported CI/CD pipelines and version control with Git, and handled deployments and production stability.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Ensured code quality through unit testing, code reviews, and development standards using JUnit and Mockito. Took part in agile ceremonies (sprint planning, reviews, retrospectives) under Scrum, Kanban and XP.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Sindical TR: Led modernization and migration of a legacy PHP syndicate system to Java / Spring Boot microservices, adding new features and security improvements.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          US Drone Surveillance (MVP): Developed backend services for a drone aerial surveillance platform, ensuring reliable data processin.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Together, these engagements show how MzTech packaged software as market-ready products: modernizing an institutional client, opening a path in the US with a focused MVP and repeating the SaaS playbook across borders.
        </li>
      </ul>
    </motion.div>
  );
};

export default MzTech;
