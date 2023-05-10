const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What&apos;s next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda
        qui harum eveniet, laborum est inventore veniam unde ullam? Mollitia est
        voluptas incidunt maiores? Vel neque beatae rem facere libero!
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
