import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Others Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">View my archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Startup Website"
          des="Having a website for your startup is a smart strategy to reach more people, build credibility, engage with the audience, and expand your business."
          listItem={["Wordpress", "Elementor", "Hostinger"]}
          link="https://fastdevoud.online/"
        />
        <ArchiveCard
          title="Clinical Website"
          des="Invest in the creation of a customized and high-quality website and take advantage of the benefits of a strong online presence."
          listItem={["Wordpress", "Elementor", "Hostinger"]}
          link="https://dentalcarewhite.online/"
        />
        <ArchiveCard
          title="E-commerce Website"
          des="Investing in an online e-commerce store is a smart strategy to boost your business, expand your reach, increase sales, and enhance the customer experience."
          listItem={["Wordpress", "Elementor", "Woocommerce"]}
          link="https://mercadosolano.online/"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Startup Website"
                des="Having a website for your startup is a smart strategy to reach more people, build credibility, engage with the audience, and expand your business."
                listItem={["Wordpress", "Elementor", "Hostinger"]}
                link="https://fastdevoud.online/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Clinical Website"
                des="Invest in the creation of a customized and high-quality website and take advantage of the benefits of a strong online presence."
                listItem={["Wordpress", "Elementor", "Hostinger"]}
                link="https://dentalcarewhite.online/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="E-commerce Website"
                des="Investing in an online e-commerce store is a smart strategy to boost your business, expand your reach, increase sales, and enhance the customer experience."
                listItem={["Wordpress", "Elementor", "Woocommerce"]}
                link="https://mercadosolano.online/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
