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
          title="Dafon CV"
          des="A smart solution for the time-consuming process of creating and customizing resumes to meet ATS screening criteria"
          listItem={["Golang", "Rest", "VueJS"]}
          link="https://github.com/Daniel-Fonseca-da-Silva/dafon-cv-api"
        />
        <ArchiveCard
          title="Dafon PDF Extractor"
          des="A robust FastAPI-based service for extracting company information from PDF files. This API processes PDF documents."
          listItem={["Python", "Rest", "FastAPI"]}
          link="https://github.com/Daniel-Fonseca-da-Silva/Dafon-PDF-Extractor-API"
        />
        <ArchiveCard
          title="Freight-Delay-Notification"
          des="automated solution for monitoring, analyzing, and notifying freight delays using real-time traffic data."
          listItem={["NestJs", "SendGrid", "GPT-4"]}
          link="https://github.com/Daniel-Fonseca-da-Silva/Freight-Delay-Notification"
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
                des="A microservice responsible for order management in a distributed architecture."
                listItem={["RabbitMQ", "Java", "Mongo"]}
                link="https://github.com/Daniel-Fonseca-da-Silva/Order-Ms-Api"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Clinical Website"
                des="A real-time chat application built with gRPC and Go, featuring bidirectional streaming communication between clients and server."
                listItem={["Golang", "gRPC", "GRPC-Gateway"]}
                link="https://github.com/Daniel-Fonseca-da-Silva/Chat-GRPC-API"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="E-commerce Website"
                des="Sytem where you can to make a search by stores created with Ruby 3.0.2, sqlite3 and rails 7."
                listItem={["Ruby", "Rails", "SQLite"]}
                link="https://github.com/Daniel-Fonseca-da-Silva/dafonsearch"
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
