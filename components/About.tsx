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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            earum corrupti quae molestiae,{" "}
            <span className="text-textGreen">veniam quo rerum alias</span>
            laboriosam ipsa at voluptates, illo et perferendis reprehenderit
            necessitatibus tempore{" "}
            <span className="text-textGreen">voluptatibus</span> excepturi
            quasi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            earum corrupti quae molestiae,{" "}
            <span className="text-textGreen">veniam quo rerum alias</span>
            laboriosam ipsa at voluptates, illo et perferendis reprehenderit
            necessitatibus tempore{" "}
            <span className="text-textGreen">voluptatibus</span> excepturi
            quasi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            earum corrupti quae molestiae,{" "}
            <span className="text-textGreen">veniam quo rerum alias</span>
            laboriosam ipsa at voluptates, illo et perferendis reprehenderit
            necessitatibus tempore{" "}
            <span className="text-textGreen">voluptatibus</span> excepturi
            quasi?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
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
              <div className="hidden lgl:inline-flex absolute w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
