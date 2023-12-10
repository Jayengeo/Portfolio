import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { DiRuby } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Skill = ({ name, icon, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center">
        <div className="mr-1">{icon}</div>
        {name}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-20 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightLg md:dark:bg-circularDarkLg sm:bg-circularLightLg sm:dark:bg-circularDarkLg">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          <FaCode size={25} />
        </motion.div>
        <Skill name="CSS" icon={<FaCss3 />} x="-5vw" y="-10vw" />
        <Skill name="HTML" icon={<FaHtml5 />} x="-20vw" y="2vw" />
        <Skill name="Javascript" icon={<IoLogoJavascript />} x="-0vw" y="5vw" />
        <Skill name="ReactJS" icon={<RiReactjsFill />} x="0vw" y="12vw" />
        <Skill name="NextJS" icon={<TbBrandNextjs />} x="-20vw" y="-15vw" />
        <Skill name="Figma" icon={<FaFigma />} x="15vw" y="-12vw" />
        <Skill name="Ruby" icon={<DiRuby />} x="15vw" y="15vw" />
        <Skill name="Tailwind CSS" icon={<SiTailwindcss />} x="-25vw" y="15vw" />
        <Skill name="NodeJS" icon={<FaNodeJs />} x="0vw" y="-20vw" />
        <Skill name="Typescript" icon={<SiTypescript />} x="35vw" y="15vw" />
        <Skill name="Express" icon={<SiExpress />} x="-30vw" y="-10vw" />
        <Skill name="Python" icon={<FaPython />} x="-0vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;
