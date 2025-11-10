import {dafonCvBanner, dafonpdfExtractor, dafoSite } from "@/public/assets";
import SectiontTitle from "./SectiontTitle";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsGlobeAmericas } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
      <SectiontTitle title="Projects created" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-12 sm:gap-16 md:gap-20 lg:gap-28 mt-6 sm:mt-8 md:mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-28 mt-6 sm:mt-8 md:mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Daniel-Fonseca-da-Silva/Dafon-PDF-Extractor-API"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={dafonpdfExtractor}
                  alt="Dafon PDF Extractor API image"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right xl:-ml-16 z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                API
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">PDF Extractor API</h3>
              <p className="glass text-sm sm:text-base md:text-lg p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
              This API processes PDF documents to identify and extract company names, NIFs (Portuguese Tax Identification Numbers), and related data.
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Restfull API</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Python</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Swagger</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Docker</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva/Landing-Page-Template-Astronomy"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href=""
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
              href=""
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={dafonCvBanner}
                  alt="DafonCV banner image"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                SaaS
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">DafonCV </h3>
              <p className="glass text-sm sm:text-base md:text-lg xl:-mr-16 p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
              A smart solution born from years of research and validation of a real pain point faced by millions: the overwhelming time spent creating and customizing resumes, especially to meet the strict criteria of automated screening systems like ATS
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">SaaS</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">NextJS</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Golang</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Tailwind</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">MySQL</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva/dafon-cv-api"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.dafoncv.online"
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
              href="https://www.dafon.online"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={dafoSite}
                  alt="Dafon website image"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right xl:-ml-16 z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                Website
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">Dafon</h3>
              <p className="glass text-sm sm:text-base md:text-lg p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
              The Dafon Website is a modern and responsive web application developed to present Dafon company, its innovative solutions, projects, locations, and contact information. The site was built with a focus on performance, SEO, accessibility, and user experience.
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Landing Page</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">NextJS</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">TypeScript</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Tailwind</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Daniel-Fonseca-da-Silva/dafon-site"
                  target="_blank"
                >
                  <BsGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.dafon.online"
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
