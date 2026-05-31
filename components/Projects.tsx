import {dafonCvBanner, techcuisineBanner, dafonBanner } from "@/public/assets";
import SectiontTitle from "./SectiontTitle";
import Image from "next/image";
import Link from "next/link";
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
              href="https://www.techcuisine.online"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={techcuisineBanner}
                  alt="TechCuisine banner image"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right xl:-ml-16 z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                SaaS
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">TechCuisine</h3>
              <p className="glass text-sm sm:text-base md:text-lg p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
              Know your real cost before the dish leaves the kitchen. TechCuisine is an AI-powered platform that builds smart recipe sheets with yield-corrected costing, menu engineering, batch scaling, and supplier insights — so every dish is priced for profit, not guesswork.
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Python</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Next</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">MongoDB</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.techcuisine.online"
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/tech-cuisine-ai"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
              <Link
                href="/projects/techcuisine"
                className="text-sm text-textGreen hover:text-textGreenHover transition-colors duration-300 underline underline-offset-4"
              >
                View project details →
              </Link>
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
                  href="https://www.dafoncv.com"
                  target="_blank"
                >
                  <BsGlobeAmericas />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.linkedin.com/company/dafoncv/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
              <Link
                href="/projects/dafoncv"
                className="text-sm text-textGreen hover:text-textGreenHover transition-colors duration-300 underline underline-offset-4"
              >
                View project details →
              </Link>
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
                  src={dafonBanner}
                  alt="Dafon website banner"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:justify-between items-start xl:items-end text-left xl:text-right xl:-ml-16 z-10 mt-4 xl:mt-0">
              <p className="font-titleFont text-textGreen text-xs sm:text-sm tracking-wide">
                Website
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textLight mb-2">Dafon</h3>
              <p className="glass text-sm sm:text-base md:text-lg p-4 sm:p-6 md:p-8 rounded-xl leading-relaxed">
              We build modern software solutions powered by AI and cloud. The Dafon corporate site is the digital front door for a company that delivers scalable, secure systems — web apps, mobile, enterprise platforms, and APIs — with agile delivery and end-to-end support from idea to launch.
              </p>
              <ul className="text-sm sm:text-base font-titleFont tracking-wide flex flex-wrap gap-3 sm:gap-4 md:gap-5 text-textDark">
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Next</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Prisma</li>
                <li className="px-3 py-1 rounded-full bg-hoverColor border border-textGreen/20">Tailwind</li>
              </ul>
              <div className="text-xl sm:text-2xl flex gap-3 sm:gap-4">
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
              <Link
                href="/projects/dafon-website"
                className="text-sm text-textGreen hover:text-textGreenHover transition-colors duration-300 underline underline-offset-4"
              >
                View project details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
