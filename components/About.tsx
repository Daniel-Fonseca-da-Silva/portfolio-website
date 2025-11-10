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
            FullStack Development & System Architecture
          </h3>
          <p>
            Most of my work happens on the backend. I build{" "}
            <span className="text-textGreen">APIs and microservices</span>{" "}
            in <span className="text-textGreen">Java with Spring</span>,{" "}
            <span className="text-textGreen">Go</span> for performance-critical services, and{" "}
            <span className="text-textGreen">NestJS</span> when TypeScript fits the project.{" "}
            I've designed systems that handle millions of requests, using{" "}
            <span className="text-textGreen">message queues (RabbitMQ, Pub/Sub, SQS)</span>{" "}
            to decouple services and keep things responsive. When it comes to databases,{" "}
            <span className="text-textGreen">I optimize queries, set up proper indexing, and implement caching strategies</span>{" "}
            that actually make a difference. Code quality matters—I write{" "}
            <span className="text-textGreen">clean, testable code following SOLID principles</span>{" "}
            because I've seen what happens when you don't.
          </p>
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-textGreen mt-6 sm:mt-8 mb-3 sm:mb-4">
            Cloud Infrastructure & DevOps
          </h3>
          <p>
            I've deployed and maintained systems on{" "}
            <span className="text-textGreen">AWS</span> for years, from{" "}
            <span className="text-textGreen">EC2 instances</span> to{" "}
            <span className="text-textGreen">serverless architectures with Lambda</span>.{" "}
            I use <span className="text-textGreen">Terraform</span> to manage infrastructure because{" "}
            <span className="text-textGreen">reproducibility and version control</span>{" "}
            save time and prevent disasters. Containers are part of my workflow—{" "}
            <span className="text-textGreen">Docker for development and Kubernetes for orchestration</span>.{" "}
            I've set up <span className="text-textGreen">CI/CD pipelines</span> that catch issues early{" "}
            and deploy with confidence. Monitoring, logging, and{" "}
            <span className="text-textGreen">proper security configurations</span>{" "}
            aren't afterthoughts—they're built in from the start.
          </p>
          
          <p>
            Beyond the standard stack, I've built{" "}
            <span className="text-textGreen">custom authentication systems</span>,{" "}
            implemented <span className="text-textGreen">Magic Link flows</span>,{" "}
            and designed <span className="text-textGreen">concurrent processing systems</span>{" "}
            that handle heavy workloads efficiently. I've also worked on{" "}
            <span className="text-textGreen">AI integrations, web scraping pipelines, and automation tools</span>{" "}
            that solve specific business problems.
          </p>
          <p>
            I've led teams as a <span className="text-textGreen">Tech Lead</span>,{" "}
            making technical decisions and setting quality standards. I enjoy{" "}
            <span className="text-textGreen">mentoring developers</span> and{" "}
            <span className="text-textGreen">sharing knowledge</span>—{" "}
            the best code comes from teams that understand not just what they're building, but why.{" "}
            I stay current with new technologies, but I'm pragmatic about what actually works in production.
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
