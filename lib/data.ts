import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import DataAnalytics from "@/public/DataAn.jpg";
import Ai_image from "@/public/ai_image.jpg";
import Automation_image from "@/public/Automation.jpg";
import { BsPersonWorkspace } from "react-icons/bs"




export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MBA",
    location: "Reva University, Banglore",
    description:
      "I graduated MBA in Business Analytics from Reva University and worked on different ML Projects",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Developer",
    location: "IQVIA, Banglore",
    description:
      "I worked as Software Devoloper or Data Analyst for 6+ years in building complex Business Apps and worked on SQL, Qliksense, C#",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2022",
  },
  {
    title: "Consultant Analyst",
    location: "Eli Lilly, Banglore",
    description:
      "I'm now work as consultant for various projects in building data related Apps and services. My stack includes Python, SQL, AWS, Postgress and Power Platforms.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Data Analytics",
    description:
      "I worked on different Data Analytics projects for clinical and pharma companies",
    tags: ["Power BI", "Power App", "Qliksense", "Python", "SQL", "AWS"],
    imageUrl: DataAnalytics,
  },
  {
    title: "Automation",
    description:
      "I have worked on various projects on Automation of data and process through Apps and services",
    tags: ["Power Automate", "Python", "Power App"],
    imageUrl: Automation_image,
  },
  {
    title: "AI or ML",
    description:
      "Worked on a text analytics projects that predicts occurance of patients serious adverse events using historic diagnois data",
    tags: ["Python", "Pandas", "Keras"],
    imageUrl: Ai_image,
  },
] as const;

export const skillsData = [
  "SQL",
  "Python",
  "Qliksense",
  "Power BI",
  "Keras",
  "Pandas",
  "Power App",
  "Power Automate",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "PostgreSQL",
  "Python",
  "Codepipeline",
  "AWS S3",
] as const;
