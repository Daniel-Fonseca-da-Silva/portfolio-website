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
            Software Engineer & Architect
          </h3>
          <p>
            For more than ten years I have designed and scaled{" "}
            <span className="text-textGreen">high-availability systems</span> from the ground up. At enterprise companies such as{" "}
            <span className="text-textGreen">MEO Altice</span> and <span className="text-textGreen">Leroy Merlin</span>, I turn demanding business problems into dependable{" "}
            <span className="text-textGreen">cloud-native platforms on AWS</span> backed by{" "}
            <span className="text-textGreen">well-designed REST APIs</span>. I also build{" "}
            <span className="text-textGreen">projects from scratch</span> when companies need ideas turned into{" "}
            <span className="text-textGreen">complete, scalable systems</span> ready for production.
          </p>
          <p>
            I cover the <span className="text-textGreen">full delivery cycle</span>:{" "}
            <span className="text-textGreen">architecture</span>, <span className="text-textGreen">secure development</span>,{" "}
            <span className="text-textGreen">DevOps</span>, and production. My stack includes{" "}
            <span className="text-textGreen">Go</span>, <span className="text-textGreen">Python</span>,{" "}
            <span className="text-textGreen">Java</span>, <span className="text-textGreen">microservices</span>, and{" "}
            <span className="text-textGreen">REST APIs</span>. I connect existing systems with{" "}
            <span className="text-textGreen">AI agents</span> so teams ship faster without losing{" "}
            <span className="text-textGreen">stability</span>. For messaging and async workflows I work with{" "}
            <span className="text-textGreen">RabbitMQ</span> and <span className="text-textGreen">Google Pub/Sub</span>, and I use{" "}
            <span className="text-textGreen">Supabase</span> when a secure backend with auth, storage, and real-time data helps the product ship faster.
          </p>
          <p>
            As <span className="text-textGreen">Founder and CTO of Dafon Online</span>, I lead as a{" "}
            <span className="text-textGreen">technical leader</span> who turns{" "}
            <span className="text-textGreen">business challenges</span> into digital products built to last. My approach combines{" "}
            <span className="text-textGreen">robust system architecture</span>,{" "}
            <span className="text-textGreen">agile methodologies (Scrum, Kanban)</span>, and{" "}
            <span className="text-textGreen">DevOps practices</span> to deliver solutions that support{" "}
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
              <span>PostgreSQL, Supabase, MySQL, Redis, MongoDB</span>
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
        <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-none lg:w-1/3 shrink-0 relative group mx-auto lg:mx-0">
          <div className="relative aspect-square w-full">
            <div
              className="hidden lg:block absolute inset-0 border-2 border-textGreen rounded-xl -translate-x-2 -translate-y-2 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-300 glow-green-hover pointer-events-none"
              aria-hidden
            />
            <div
              className="lg:hidden absolute top-0 left-0 w-[calc(100%-1rem)] h-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] sm:h-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] md:h-[calc(100%-2rem)] border-2 border-textGreen rounded-xl pointer-events-none"
              aria-hidden
            />
            <div className="relative z-10 w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] md:w-[calc(100%-2rem)] lg:w-full ml-4 sm:ml-6 md:ml-8 lg:ml-0 aspect-square">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  fill
                  className="rounded-xl object-cover object-center"
                  src={profileImg}
                  alt="Daniel Fonseca - Software Engineer & Architect"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-textGreen/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
