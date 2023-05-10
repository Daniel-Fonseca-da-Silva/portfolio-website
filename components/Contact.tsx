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
        Dafon has a proven track record of delivering exceptional web solutions
        tailored to the unique needs of our clients. With our expertise in web
        development, user experience design, and advanced technologies, we have
        successfully transformed numerous businesses online presence, propelling
        them to new heights of success.
      </p>
      <a href="mailto:daniel@dafon.dev">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Speak With Us
        </button>
      </a>
    </section>
  );
};

export default Contact;
