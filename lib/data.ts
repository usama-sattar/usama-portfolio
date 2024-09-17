import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import skeding from "@/public/sked.png";
import remoto from "@/public/remoto.png";
import jpcl from "@/public/jpcl.jpg";
import enatega from "@/public/enatega.jpg";

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
    title: "BS(Computer Science)",
    location: "Pakistan, Islamabad",
    description: "Computer Science graduate with CGPA of 3.27/4",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Engineer",
    location: "Pakistan, Islamabad",
    description:
      "I worked as a associate software engineer. I worked on different tasks assigned to me related to web development and Java.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2021 - Dec 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Pakistan, Islamabad",
    description:
      "I have worked here as a Junior MERN stack developer. Assisted in mobile and web development of their open source product Enatega (Multivendor food delivery solution)",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - May 2022",
  },
  {
    title: "Senior Full-Stack Developer",
    location: "New York, United States, Remote",
    description:
      "I Started as a Junior MERN stack developer, and now working as a senior developer and as a Team Lead.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Apr 2024",
  },
  {
    title: "Senior Full Stack Developer",
    location: "Spain, Remote",
    description:
      "Developed Remotoco product from scratch, for a job matching platform and collaborated with the product team to define features and refine product specifications.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Remotoco",
    description:
      "digital platform that connects remote talent with employment opportunities by using AI to facilitate remote recruitment",
    tags: ["React", "Firebase", "Node", "Stripe", "Typescript", "tailwind"],
    imageUrl: remoto,
  },
  {
    title: "Skeding",
    description:
      "A meeting scheduler platform which allows users to create meetings with participants without any timing conflicts and double bookings.",
    tags: [
      "React",
      "Next",
      "MongoDB",
      "Node",
      "Redux",
      "Typescript",
      "Material UI",
      "Heroku",
      "AWS",
    ],
    imageUrl: skeding,
  },
  {
    title: "Timesheet system for JPCL",
    description:
      "A timesheet app for users with multiple roles including employees, project managers and admin. Also alerts user for any conflict in submitting timesheet tickets.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "AWS",
      "Node",
      "MongoDB",
      "React Query",
    ],
    imageUrl: jpcl,
  },
  {
    title: "Enatega",
    description:
      "Multivendor food delivery web and mobile app with separater rider, restaurant and customer views.",
    tags: [
      "React",
      "Node.js",
      "SQL",
      "GraphQL",
      "React Native",
      "Web sockets",
      "Apollo",
    ],
    imageUrl: enatega,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "React Native",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Framer Motion",
  "PHP",
  "AWS",
] as const;
