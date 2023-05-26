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
            <span className="text-textGreen"> software developer</span> with
            five years of experience in the field. My expertise spans a variety
            of technologies and frameworks, allowing me to work on both
            <span className="text-textGreen">front-end and back-end</span>{" "}
            application development. I have deep knowledge in Java, Spring,
            NextJS, Typescript, Tailwind, Bootstrap, CSS3, HTML5, JavaScript,
            NestJS, PostgreSQL, Redis, and MySQL.
          </p>
          <p>
            In the realm of front-end development, I am{" "}
            <span className="text-textGreen">highly skilled </span>in creating
            attractive and functional user interfaces. I use technologies such
            as HTML5, CSS3, and JavaScript to develop{" "}
            <span className="text-textGreen">
              responsive and user-friendly{" "}
            </span>{" "}
            web applications. My experience includes working with popular
            frameworks like{" "}
            <span className="text-textGreen">NextJS and Angular</span>, enabling
            the creation of cutting-edge web applications. I am also proficient
            in using{" "}
            <span className="text-textGreen">Bootstrap or Tailwind </span>to
            ensure a responsive and user-friendly design.
          </p>
          <p>
            When it comes to back-end development, I specialize in using
            technologies like{" "}
            <span className="text-textGreen">Java and Spring</span>. I am
            capable of building robust APIs and scalable web applications using
            these tools. Additionally, I have knowledge in{" "}
            <span className="text-textGreen">NestJS, a Node.js framework</span>{" "}
            for building efficient and well-structured server-side applications.
          </p>
          <p>
            I also have a strong background in databases, including PostgreSQL,
            Redis, and MySQL. I am skilled in{" "}
            <span className="text-textGreen">
              designing and modeling efficient databases
            </span>
            , ensuring proper data storage and retrieval for complex
            applications.
          </p>
          <p>
            In addition to my technical skills, I excel in supporting and
            mentoring junior developers. I am always willing to{" "}
            <span className="text-textGreen">share my knowledge</span> and help
            the <span className="text-textGreen">team grow and develop</span>.
            My experience includes working collaboratively, providing guidance,
            and resolving{" "}
            <span className="text-textGreen">technical challenges</span>.
          </p>
          <p>
            Continuous improvement of front-end and back-end web systems is a
            crucial aspect of my work. I constantly seek opportunities to{" "}
            <span className="text-textGreen">
              optimize and enhance performance , usability, and security{" "}
            </span>
            in the applications I develop. I stay updated with industry best
            practices and trends, ensuring the systems I build align with the
            highest quality standards.
          </p>
          <p>
            In summary, I am an experienced and versatile software developer
            with{" "}
            <span className="text-textGreen">
              strong skills in a variety of technologies and frameworks
            </span>
            . My experience spans both front-end and back-end development, and I
            am highly efficient in creating{" "}
            <span className="text-textGreen">
              high-quality web applications
            </span>
            . With my passion for learning and knowledge sharing, I am a
            valuable asset to any development team.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              Java(8+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiSpring />
              </span>
              Spring
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
              Angular (2+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiReact />
              </span>
              React/Next
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              Node/NestJS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              Tailwind
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              PostGreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoIosCafe />
              </span>
              Docker/Kubernetes
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
