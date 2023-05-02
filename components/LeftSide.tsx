import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp, BsDiscord,BsGlobeAmericas } from "react-icons/bs";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://wa.me/5524981579339" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsWhatsapp />
          </span>
        </a>
        <a href="https://discord.gg/Q7YjW9RY" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsDiscord />
          </span>
        </a>
        <a href="https://github.com/Daniel-Fonseca-da-Silva" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/daniel-f-s-developer/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsLinkedin />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/daniel-f-s-developer/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsInstagram />
          </span>
        </a>
        <a href="https://dafon.dev/en/solucoes-english/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BsGlobeAmericas />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide