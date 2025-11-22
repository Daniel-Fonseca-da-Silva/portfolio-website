import { profileImg } from "@/public/assets";
import SectiontTitle from "./SectiontTitle";
import { IoIosCafe } from "react-icons/io";
import { SiTypescript, SiReact, SiSpring } from "react-icons/si";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-8 sm:py-10 md:py-16 lg:py-32 flex flex-col gap-6 sm:gap-8 px-4 sm:px-6"
    >
      <SectiontTitle title="About me" titleNo="01" />
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
        <div className="w-full lg:w-2/3 text-base sm:text-lg text-textDark font-normal flex flex-col gap-4 sm:gap-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-textGreen mt-2 sm:mt-4 mb-3 sm:mb-4">
          System Engineer
          </h3>
          <p>
            Software Engineer with over 10 years of experience, specialized in initiating and developing{" "}
            <span className="text-textGreen">projects from scratch</span> for companies, transforming ideas into{" "}
            <span className="text-textGreen">complete and scalable systems</span>. Founder and independent developer, I work on creating{" "}
            <span className="text-textGreen">original software and digital solutions</span> from conception to delivery, combining{" "}
            <span className="text-textGreen">strategic vision</span> with cutting-edge technical execution.
          </p>
          <p>
            Expert in developing modern systems using the latest market technologies, including{" "}
            <span className="text-textGreen">Golang</span>, <span className="text-textGreen">Java</span>,{" "}
            <span className="text-textGreen">Cloud Computing</span>, <span className="text-textGreen">Solidity</span>,{" "}
            <span className="text-textGreen">Web 3.0</span>, <span className="text-textGreen">Smart Chains</span>, and{" "}
            <span className="text-textGreen">Microservices</span>. I integrate{" "}
            <span className="text-textGreen">Artificial Intelligence (AI)</span> into the development process to accelerate{" "}
            <span className="text-textGreen">product creation</span>, optimize solutions, and deliver{" "}
            <span className="text-textGreen">innovative systems</span> that generate real value for companies.
          </p>
          <p>
            Results-driven <span className="text-textGreen">technical leader</span> with a proven track record in transforming{" "}
            <span className="text-textGreen">business challenges</span> into unique digital products. My approach combines{" "}
            <span className="text-textGreen">robust system architecture</span>,{" "}
            <span className="text-textGreen">agile methodologies (Scrum, Kanban)</span>,{" "}
            <span className="text-textGreen">DevOps practices</span> and a holistic vision that connects{" "}
            <span className="text-textGreen">technology, creativity and purpose</span> to create solutions that drive{" "}
            <span className="text-textGreen">sustainable growth</span> for organizations.
          </p>
          <ul className="max-w-[500px] text-sm sm:text-base font-titleFont grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <IoIosCafe />
              </span>
              <span>Golang, Python, Java</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <SiSpring />
              </span>
              <span>Spring, Grafana, Prometheus</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <SiTypescript />
              </span>
              <span>JavaScript / TypeScript</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <IoIosCafe />
              </span>
              <span>HTML5, CSS3, Tailwind, Bootstrap</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <SiReact />
              </span>
              <span>Vue, Next, Angular</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <IoIosCafe />
              </span>
              <span>Swagger, Postman, Rest, GraphQL</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <IoIosCafe />
              </span>
              <span>RabbitMQ, Google Pub/Sub, SQS, SNS</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <IoIosCafe />
              </span>
              <span>PostGreSQL, MySQL, Redis, OracleDB, MongoDB</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <IoIosCafe />
              </span>
              <span>SOLID, Clean Code, Design Patterns</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-hoverColor transition-colors duration-300">
              <span className="text-textGreen text-lg">
                <IoIosCafe />
              </span>
              <span>AWS, Docker/Kubernetes, Terraform</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 h-64 sm:h-72 md:h-80 relative group mx-auto lg:mx-0">
          <div className="absolute w-full h-64 sm:h-72 md:h-80 -left-4 sm:-left-6 md:-left-8 -top-4 sm:-top-6 md:-top-8 rounded-xl overflow-hidden">
            <div className="w-full h-full relative z-20 flex pl-4 sm:pl-6 md:pl-8 lg:pl-0">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  className="rounded-xl h-full w-full object-cover"
                  src={profileImg}
                  alt="profileImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-textGreen/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-flex absolute w-full h-64 sm:h-72 md:h-80 border-2 border-textGreen rounded-xl group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 glow-green-hover"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
