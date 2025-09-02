import { profileImg } from "@/public/assets";
import SectiontTitle from "./SectiontTitle";
import { IoIosCafe } from "react-icons/io";
import { SiTypescript, SiReact, SiSpring } from "react-icons/si";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectiontTitle title="About me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Daniel Fonseca, I am a talented{" "}
            <span className="text-textGreen">software Engineer</span> with
            over five years of experience, specialized in creating{" "}
            <span className="text-textGreen">scalable systems, modern architecture</span>{" "}
            and agile development practices. My expertise spans a variety
            of technologies and frameworks, allowing me to work on both
            <span className="text-textGreen">front-end and back-end</span>{" "}
            application development. I have deep knowledge in{" "}
            <span className="text-textGreen">Java (Spring), Go (Golang), Node.js (NestJS), Next.js, Vue.js, TypeScript, JavaScript, Tailwind, Bootstrap, CSS3, HTML5, PostgreSQL, Redis, MySQL, Amazon AWS</span>.
          </p>
          
          <h3 className="text-xl font-semibold text-textGreen mt-6 mb-3">
            Backend Development & Architecture
          </h3>
          <p>
            In backend development, I specialize in building{" "}
            <span className="text-textGreen">high-performance, scalable APIs and microservices</span>{" "}
            using modern technologies. My expertise includes{" "}
            <span className="text-textGreen">Java with Spring Framework</span> for enterprise applications,{" "}
            <span className="text-textGreen">Go (Golang)</span> for high-performance systems, and{" "}
            <span className="text-textGreen">NestJS</span> for structured Node.js applications. I design{" "}
            <span className="text-textGreen">RESTful APIs, GraphQL endpoints</span>, and implement{" "}
            <span className="text-textGreen">asynchronous communication patterns</span> using{" "}
            <span className="text-textGreen">RabbitMQ, Google Pub/Sub, and AWS SQS/SNS</span>.
          </p>
          <p>
            I excel in{" "}
            <span className="text-textGreen">database design and optimization</span>, working with{" "}
            <span className="text-textGreen">PostgreSQL, MySQL, Redis, and MongoDB</span>. I implement{" "}
            <span className="text-textGreen">caching strategies, connection pooling</span>, and{" "}
            <span className="text-textGreen">database sharding</span> for high-traffic applications. My{" "}
            <span className="text-textGreen">software architecture skills</span> include applying{" "}
            <span className="text-textGreen">SOLID principles, Clean Code practices, and design patterns</span>{" "}
            to create maintainable and extensible codebases.
          </p>
          
          <h3 className="text-xl font-semibold text-textGreen mt-6 mb-3">
            Cloud Infrastructure & DevOps
          </h3>
          <p>
            In cloud infrastructure, I have extensive experience with{" "}
            <span className="text-textGreen">Amazon Web Services (AWS)</span>, designing and implementing{" "}
            <span className="text-textGreen">scalable, fault-tolerant architectures</span>. I work with{" "}
            <span className="text-textGreen">EC2, ECS, Lambda, RDS, S3, CloudFormation, and EFS</span>{" "}
            to build robust cloud-native applications. I implement{" "}
            <span className="text-textGreen">Infrastructure as Code (IaC)</span> using{" "}
            <span className="text-textGreen">Terraform and CloudFormation</span>, ensuring{" "}
            <span className="text-textGreen">reproducible and version-controlled infrastructure</span>.
          </p>
          <p>
            My DevOps expertise includes{" "}
            <span className="text-textGreen">containerization with Docker and orchestration with Kubernetes</span>,{" "}
            <span className="text-textGreen">CI/CD pipeline automation</span> using tools like{" "}
            <span className="text-textGreen">GitHub Actions, Jenkins, and AWS CodePipeline</span>. I implement{" "}
            <span className="text-textGreen">monitoring and logging solutions</span>,{" "}
            <span className="text-textGreen">load balancing strategies</span>, and{" "}
            <span className="text-textGreen">network security configurations</span> including{" "}
            <span className="text-textGreen">VPCs, security groups, and IAM policies</span>.
          </p>
          
          <p>
            I also have a strong background in{" "}
            <span className="text-textGreen">databases and storage solutions</span>, including{" "}
            <span className="text-textGreen">PostgreSQL, Redis, MySQL, Amazon Aurora, and MinIO</span>. I am skilled in{" "}
            <span className="text-textGreen">
              designing and modeling efficient databases
            </span>
            , ensuring proper data storage and retrieval for complex
            applications. My expertise extends to{" "}
            <span className="text-textGreen">distributed caching and object storage</span>{" "}
            for high-performance systems.
          </p>
          <p>
            In the realm of{" "}
            <span className="text-textGreen">DevOps and Cloud infrastructure</span>, I have extensive experience with{" "}
            <span className="text-textGreen">AWS services (S3, EC2, RDS, Lambda, ECS, CloudFormation, EFS)</span>,{" "}
            <span className="text-textGreen">Terraform for Infrastructure as Code</span>,{" "}
            <span className="text-textGreen">Docker and Kubernetes</span> for containerization,{" "}
            <span className="text-textGreen">load balancing, networking (subnets, security groups)</span>, and{" "}
            <span className="text-textGreen">Linux system administration</span>. I also work with{" "}
            <span className="text-textGreen">CI/CD pipelines and application monitoring</span>.
          </p>
          <p>
            I excel in{" "}
            <span className="text-textGreen">software architecture and design patterns</span>, applying{" "}
            <span className="text-textGreen">SOLID principles and Clean Code</span> practices. I create{" "}
            <span className="text-textGreen">custom middlewares</span> for authentication, logging, and validation, implement{" "}
            <span className="text-textGreen">Magic Link authentication</span>, and design{" "}
            <span className="text-textGreen">parallel and concurrent systems</span> for high performance. I also work with{" "}
            <span className="text-textGreen">AI-powered intelligent systems, web scraping, and data automation</span>.
          </p>
          <p>
            In addition to my technical skills, I excel in{" "}
            <span className="text-textGreen">supporting and mentoring junior developers</span>. I am always willing to{" "}
            <span className="text-textGreen">share my knowledge</span> and help
            the <span className="text-textGreen">team grow and develop</span>.
            My experience includes working collaboratively, providing guidance,
            and resolving{" "}
            <span className="text-textGreen">technical challenges</span>. I have experience as a{" "}
            <span className="text-textGreen">Tech Lead</span>, supporting teams in technical decisions and quality standards.
          </p>
          <p>
            Continuous improvement of{" "}
            <span className="text-textGreen">front-end and back-end web systems</span> is a
            crucial aspect of my work. I constantly seek opportunities to{" "}
            <span className="text-textGreen">
              optimize and enhance performance, usability, and security{" "}
            </span>
            in the applications I develop. I stay updated with industry best
            practices and trends, ensuring the systems I build align with the
            highest quality standards. Recently, I have been intensely dedicated to{" "}
            <span className="text-textGreen">constant creation of new software</span>{" "}
            using modern and scalable cloud technologies.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              Golang, Java
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiSpring />
              </span>
              Spring, NestJS, Gorm
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiTypescript />
              </span>
              JavaScript / TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              HTML5, CSS3, Tailwind, Bootstrap
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiReact />
              </span>
              Vue, Next, Angular
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              Swagger, Postman, Rest, GraphQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              RabbitMQ, Google Pub/Sub, SQS, SNS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              PostGreSQL, MySQL, Redis, OracleDB, MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              SOLID, Clean Code, Design Patterns
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              AWS, Docker/Kubernetes, Terraform
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex absolute w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
