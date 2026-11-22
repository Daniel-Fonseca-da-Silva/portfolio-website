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
        <span className="text-textGreen tracking-wide">(Fullstack Engineer)</span>
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          I worked at Alterdata on a startup initiative building innovative, Uber-like software for 24 hour self service travel terminals across the United States. The system addressed complex geospatial mapping for passenger and hotel localization, alongside managing multi-modal transportation ticketing (rail, road, air and sea).
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Architected event-driven microservices using Java 11 and Spring Boot, developing highly scalable backend services that leveraged RabbitMQ and Kafka message queues for seamless inter-service communication and data transfer.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Built robust REST endpoints with Spring Boot, accurately documented via Swagger and rigorously tested using JUnit and Postman. Managed data modeling and complex relationships across MySQL and MongoDB databases using JPA and Hibernate, alongside Redis for efficient caching.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Integrated AWS Lambda with optimized JVM configuration and provisioned concurrency to cut latency by 15% during traffic peaks, improving high availability under load.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Integrated Google Maps/ Mapbox APIs to track precise locations via latitude and longitude for seamless passenger routing.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Containerized applications using Docker in Linux environments and orchestrated deployments with Kubernetes for scalable, resilient infrastructure. Automated lifecycle (SDLC) from testing to production using Jenkins pipelines, integrating SonarQube for static code analysis and enforcing code review standards and best practices.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Managed version control with Git and communicated cross-functionally via Teams, demonstrating strong collaboration and communication skills. Tracked project milestones in Jira while contributing actively within Scrum, Kanban and XP methodologies in an Agile.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          GeoTicket: An intelligent system enabling millions of users to securely track trip statuses and expenses in real-time. The platform provides continuous feedback while ensuring high availability, stability and security at scale.
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
