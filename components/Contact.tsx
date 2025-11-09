const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-8 sm:py-10 md:py-16 xl:py-32 flex flex-col gap-3 sm:gap-4 items-center justify-center px-4 sm:px-6"
    >
      <p className="font-titleFont text-sm sm:text-base md:text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&apos;s next?
      </p>
      <h2 className="font-titleFont text-3xl sm:text-4xl md:text-5xl font-semibold text-center">Contact Now</h2>
      <p className="max-w-[600px] text-center text-sm sm:text-base text-textDark leading-relaxed">
        I have a proven track record of delivering exceptional software solutions
        tailored to the unique needs of your business. With my expertise in software
        development, cloud architecture, and cutting-edge technologies, I have
        successfully transformed numerous businesses&apos; digital infrastructure, propelling
        them to new heights of operational excellence and market competitiveness.
      </p>
      <a href="https://wa.me/351913619053" target="_blank">
        <button className="w-full sm:w-40 h-12 sm:h-14 border border-textGreen mt-4 sm:mt-6 font-titleFont text-xs sm:text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Speak With Me
        </button>
      </a>
    </section>
  );
};

export default Contact;
