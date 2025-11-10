import {
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
  BsGlobeAmericas,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="hidden md:inline-flex xl:hidden items-center justify-center w-full py-4 sm:py-6 gap-3 sm:gap-4 px-4">
      <a href="https://wa.me/5524981579339" target="_blank">
        <span className="w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
          <BsWhatsapp />
        </span>
      </a>
      <a href="https://github.com/Daniel-Fonseca-da-Silva" target="_blank">
        <span className="w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
          <BsGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-fonseca-da-silva/"
        target="_blank"
      >
        <span className="w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
          <BsLinkedin />
        </span>
      </a>
      <a href="http://www.dafon.online/" target="_blank">
        <span className="w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
          <BsGlobeAmericas />
        </span>
      </a>
    </div>
  );
};

export default Footer;
