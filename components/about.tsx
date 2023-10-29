"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Experianced professional with 7+ year experaince in creating data related products{" "}
        <span className="font-medium">I have graduated with MBA in Business Aanlytics</span>, And stil 
        learning new technologies like AI, Web, Mobile App and Cloud.{" "}
        <span className="font-medium">I have vast experiance in clinical and pharma industries</span>{" "}
        <span className="italic">in creating data solutions for the clients. </span> 
         <span className="underline">I love</span> coding because it reduce the complex business problems   
        into a simple Application. My core stack
        is{" "}
        <span className="font-medium">
          Python, SQL, Power Platforms, and React.js
        </span>
        . I am also experiance in AI and love the way that AI simplyfies lot of task for human.
        I have worked on few machine learning projects and one of that icludes predictivce model predicting the occurance of 
        serious adverse event using historic patients diagnosis data using text analytics. I currently learning Generative AI, Text and Image Analaytics
        also cloud technologies like AWS. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Data related solutions as a consultant | Engineer | Devoloper
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy analyzing
        the crypto markets, watching movies.
      </p>
    </motion.section>
  );
}
