import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import SEO from "@/components/SEO";
import SubFooter from "@/components/SubFooter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <SEO />
      <main className="w-full min-h-screen font-bodyFont gradient-bg text-textLight overflow-x-hidden scrollbar">
        <Navbar />
        <div className="w-full xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="w-full mx-auto p-2 sm:p-3 md:p-4">
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
            <SubFooter />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
