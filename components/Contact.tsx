const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-8 sm:py-10 md:py-16 xl:py-32 flex flex-col gap-3 sm:gap-4 items-center justify-center px-4 sm:px-6"
    >
      <p className="font-titleFont text-base sm:text-lg md:text-xl text-textGreen font-semibold flex items-center tracking-wide mb-2">
        04. Next steps?
      </p>
      <h2 className="font-titleFont text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-6">
        <span className="gradient-text">Contact me</span>
      </h2>
      <p className="max-w-[700px] text-center text-base sm:text-lg text-textDark leading-relaxed mb-8 sm:mb-10">
        Deliver exceptional software solutions tailored to your business needs. 
        Let's transform your digital infrastructure together.
      </p>
      <a href="https://wa.me/351913619053" target="_blank" className="group">
        <button className="w-full sm:w-56 h-14 sm:h-16 border-2 border-textGreen mt-4 sm:mt-6 font-titleFont text-sm sm:text-base text-textGreen tracking-wider rounded-lg hover:bg-hoverColor duration-300 transition-all glow-green-hover font-semibold flex items-center justify-center gap-2">
          <span>Contact me</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </a>
    </section>
  );
};

export default Contact;
