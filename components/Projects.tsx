import { dafonImg, dentalImg, spaceImg } from "@/public/assets";
import SectiontTitle from "./SectiontTitle";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsGlobeAmericas } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectiontTitle title="Projects created" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://space-discovery-three.vercel.app"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={spaceImg}
                  alt="Space Discovery"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Space Discovery Next Site</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                With a landing page created with Next.js and Tailwind CSS, you
                will have
                <span className="text-textGreen"> full control</span> over the
                design , content, and functionality of the page, offering a
                <span className="text-textGreen">
                  {" "}
                  unique and personalized{" "}
                </span>
                experience to your visitors and customers. Don&apos;t waste any
                more time and take your passion for astronomy to a new level
                with a
                <span className="text-textGreen">
                  {" "}
                  high-quality and high-performance{" "}
                </span>
                landing page!
              </p>
              <ul className="text-sm md:text-sm font-titleFont sm:text-xs tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Astronomy</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva/Landing-Page-Template-Astronomy"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://dafon.dev/en/solucoes-english"
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/dafon-sistemas"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://dentalcarewhite.online/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={dentalImg}
                  alt="Dental Care White"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Dental Care White</h3>
              <p className="bg-[#112240] text-sm md:text-base xl:-mr-16  p-2 md:p-6 rounded-md">
                If you own a{" "}
                <span className="text-textGreen">dental clinic</span> and want
                to offer your patients a{" "}
                <span className="text-textGreen">modern, easy-to-use </span>
                website that allows for online reservations and appointments,
                creating a website with Next.js and Tailwind CSS may be the{" "}
                <span className="text-textGreen"> ideal solution </span> for
                you.
              </p>
              <ul className="text-sm md:text-sm font-titleFont sm:text-xs tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Dental</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://dentalcarewhite.online/"
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/dafon-sistemas"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://dafon.dev/en/solucoes-english/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={dafonImg}
                  alt="Dafon"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Dafon</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                We develop{" "}
                <span className="text-textGreen"> custom web systems </span> for
                companies and organizations of different sizes using the{" "}
                <span className="text-textGreen">
                  most efficient technologies
                </span>{" "}
                in the market. We use recent{" "}
                <span className="text-textGreen"> full-stack development </span>{" "}
                technologies to provide our clients with all the benefits of
                cloud-based solutions based on{" "}
                <span className="text-textGreen">Javascript</span>.
              </p>
              <ul className="text-sm md:text-sm font-titleFont sm:text-xs tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Business Site</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://dafon.dev/en/solucoes-english/"
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/dafon-sistemas"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
