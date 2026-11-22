import { motion } from "framer-motion";
import { TbArrowForwardUp } from "react-icons/tb";

const Equiplano = () => {
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
          I contributed to core public management systems at Equiplano, a company that sells and maintains software for city halls across the state of Paraná. The work centred on products that municipal teams relied on daily to keep local administration running efficiently and reliably.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Developed software solutions to improve local public management for several municipalities in Paraná. I contributed to core systems managing user permissions, warehouse supplies and city hall legal processes, ensuring robust performance and seamless integrations.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Built reactive UI components in VS Code using Angular, TypeScript, JavaScript, and RxJS to manage asynchronous methods. Ensured responsive design utilizing HTML5, CSS3, Flexbox, Bootstrap, Nebular and the DevExtreme suite.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Developed robust services via Eclipse using Java, Spring, Hibernate, JPA, Tomcat, Maven and Lombok. Integrated Jasper (JasperReports), achieving a 40% reduction in government PDF generation time via asynchronous processing. Documented APIs with Swagger.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Handle municipal client data and complex SQL queries across OracleDB, PostgreSQL and Firebird databases.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Optimized Docker container sizes and deployed applications to municipal Windows Server environments utilizing Jenkins CI/CD pipelines.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Performed comprehensive testing using Jest, JUnit, Mockito, and Postman. Implemented logging with slf4j, improving team debugging efficiency by 10%.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Managed source code in Git and tracked tasks in Jira. Collaborated closely via Teams within strict Scrum and Kanban workflows.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Conta (access management): A centralised platform that controls who can access which systems across a municipality&apos;s digital tools. By giving administrators one place to manage users and permissions, it reduced operational risk and removed the manual overhead that typically comes with onboarding new cities or expanding licences.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Almoxarifado (supplies and fleet): A system covering the full lifecycle of materials and vehicles allocated to public warehouses. It gave municipalities clear visibility over what they held, where it was, and who was responsible for it, making audits straightforward and helping prevent the waste and delays that come from untracked stock.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          EProcesso (administrative processes): Equiplano&apos;s flagship product, used daily by city halls to manage administrative and legal processes from opening to resolution. It replaced fragmented paper trails and disconnected handoffs with end-to-end visibility, making it the product that drove renewals and anchored each municipality relationship.
        </li>
        <li className="text-base flex gap-2 sm:text-sm text-textDark">
          <span className="text-textGreen mt-1">
            <TbArrowForwardUp />
          </span>
          Together, Conta, Almoxarifado and EProcesso formed an integrated suite that Equiplano could sell, expand and renew municipality by municipality. Each product reinforced the others: reliable access control made the data trustworthy, clear inventory reduced waste, and a visible process layer made compliance an argument for staying rather than switching.
        </li>
      </ul>
    </motion.div>
  );
};

export default Equiplano;
