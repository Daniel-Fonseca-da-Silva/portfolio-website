import { BsGithub, BsLinkedin, BsWhatsapp, BsGlobeAmericas } from "react-icons/bs";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://wa.me/351913619053" target="_blank">
          <span className="w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
            <BsWhatsapp />
          </span>
        </a>
        <a href="https://github.com/Daniel-Fonseca-da-Silva" target="_blank">
          <span className="w-12 h-12 text-xl glass rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:glow-green-hover border border-textGreen/20">
            <BsGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/daniel-fonseca-da-silva/" target="_blank">
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
      <div className="w-[2px] h-32 bg-gradient-to-b from-textGreen/50 via-textGreen to-transparent"></div>
    </div>
  )
}

export default LeftSide