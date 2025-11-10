import React from "react";

const SubFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="w-full flex items-center justify-center">
      <a href="http://www.dafon.online/" target="_blank" className="group">
        <p className="text-sm sm:text-base hover:text-textGreen text-textDark mb-4 sm:mb-6 px-4 text-center transition-colors duration-300">
          Copyright © {currentYear} | Powered by{" "}
          <span className="text-textGreen group-hover:text-textGreenHover transition-colors duration-300 font-semibold">
            Dafon
          </span>
        </p>
      </a>
    </section>
  );
};

export default SubFooter;
