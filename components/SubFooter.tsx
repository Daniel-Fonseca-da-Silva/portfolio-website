import React from "react";

const SubFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="w-full flex items-center justify-center">
      <a href="http://www.dafon.online/" target="_blank">
        <p className="text-xs sm:text-sm hover:text-textGreen text-textDark mb-2 px-4 text-center">
          Copyright © {currentYear} | Powered by [Dafon]
        </p>
      </a>
    </section>
  );
};

export default SubFooter;
