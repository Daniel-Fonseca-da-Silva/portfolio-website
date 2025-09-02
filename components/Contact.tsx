const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&apos;s next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Contact Now</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I have a proven track record of delivering exceptional software solutions
        tailored to the unique needs of your business. With my expertise in software
        development, cloud architecture, and cutting-edge technologies, I have
        successfully transformed numerous businesses' digital infrastructure, propelling
        them to new heights of operational excellence and market competitiveness.
      </p>
      <a href="https://wa.me/351913619053" target="_blank">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Speak With Me
        </button>
      </a>
    </section>
  );
};

export default Contact;
