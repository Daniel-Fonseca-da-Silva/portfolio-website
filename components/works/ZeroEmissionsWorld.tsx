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
        <span className="text-textGreen tracking-wide">
          (Full-Cycle Engineer)
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
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Architected and developed a scalable Spring Boot back end of RESTful microservices for real-time donation processing, asynchronous job scheduling and user notifications, focused on high performance and low latency.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Designed and optimized data pipelines with SQL Server and PL/SQL, including relational data modeling and stored procedures.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Managed ACID-compliant financial transactions and ETL workflows that aggregate project metadata and user activity across regions, preserving global data integrity and traceability.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Engineered a responsive, accessible Angular portal integrated with secure REST APIs for international donors and local NGOs, prioritizing security and performance.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Implemented CI/CD automation with GitLab and Kubernetes, with automated testing, rollback strategies and zero-downtime releases across environments.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Collaborated with teams across multiple time zones in Scrum, running stand-ups, sprint planning and rigorous code reviews.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Troubleshot data-transformation performance issues, distributed-system bottlenecks and API reliability problems.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Designed the cloud architecture on AWS, with IAM for access control, EC2 and EKS for compute and Kubernetes workloads, and ELB for traffic distribution.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Built serverless components with AWS Lambda and data stores on RDS, DynamoDB and S3.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Explored generative AI features with Amazon Bedrock.
        </li>
      </ul>
    </motion.div>
  );
};

export default ZeroEmissionsWorld;
