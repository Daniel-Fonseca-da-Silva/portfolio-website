import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsWhatsapp,
  BsDiscord,
  BsGlobeAmericas,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a href="https://wa.me/5524981579339" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsWhatsapp />
        </span>
      </a>
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsDiscord />
        </span>
      <a href="https://github.com/Daniel-Fonseca-da-Silva" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-f-s-developer/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsLinkedin />
        </span>
      </a>
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsInstagram />
        </span>
      <a href="http://www.dafon.online/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <BsGlobeAmericas />
        </span>
      </a>
    </div>
  );
};

export default Footer;
