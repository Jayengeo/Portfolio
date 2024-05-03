import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCss3,
  FaPython,
  FaFigma,
  FaNodeJs,
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaGithub,
  FaWordpress
} from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";

import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { DiRuby, DiJqueryLogo } from "react-icons/di";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiCanva,
  SiRubyonrails,
  SiPrisma,
  SiJest,
  SiStorybook,
  SiCypress,
  SiMocha,
  SiChai,
  SiMongodb,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const Skill = ({ name, icon, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-2 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
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
          <FaCode size={40} />
        </motion.div>
        <Skill name="Canva" icon={<SiCanva />} x="0vw" y="7vw" />
        <Skill name="Figma" icon={<FaFigma />} x="6vw" y="-6vw" />
        <Skill name="CSS" icon={<FaCss3 />} x="-12vw" y="1vw" />
        <Skill name="HTML" icon={<FaHtml5 />} x="12vw" y="1vw" />
        <Skill name="SASS" icon={<FaSass />} x="-6vw" y="-6vw" />
        <Skill name="Javascript" icon={<IoLogoJavascript />} x="-15vw" y="-8vw" />
        <Skill name="Typescript" icon={<SiTypescript />} x="15vw" y="10vw" />
        <Skill name="ReactJS" icon={<RiReactjsFill />} x="-22vw" y="0vw" />
        <Skill name="NextJS" icon={<TbBrandNextjs />} x="23vw" y="0vw" />
        <Skill name="Bootstrap" icon={<FaBootstrap />} x="17vw" y="-7vw" />
        <Skill name="Tailwind CSS" icon={<SiTailwindcss />} x="-13vw" y="9vw" />
        <Skill name="jQuery" icon={<DiJqueryLogo />} x="0vw" y="-12vw" />
       
        <Skill name="Ruby" icon={<DiRuby />} x="-26vw" y="-7vw" />
        <Skill name="Ruby on Rails" icon={<SiRubyonrails />} x="-26vw" y="7vw" />
        <Skill name="NodeJS" icon={<FaNodeJs />} x="-10vw" y="-15vw" />
        <Skill name="WordPress" icon={<FaWordpress />} x="11vw" y="-15vw" />
        <Skill name="Express" icon={<SiExpress />} x="26vw" y="-10vw" />
        <Skill name="Python" icon={<FaPython />} x="0vw" y="13vw" />
        
        <Skill name="SQL" icon={<PiFileSql />} x="26vw" y="10vw" />
        <Skill name="PostgreSQL" icon={<BiLogoPostgresql />} x="32vw" y="2vw" />
        <Skill name="MySQL" icon={<GrMysql />} x="-32vw" y="0vw" />
        <Skill name="MongoDB" icon={<SiMongodb />} x="-15vw" y="16vw" />
        <Skill name="Prisma" icon={<SiPrisma />} x="13vw" y="17vw" />
        <Skill name="GitHub" icon={<FaGithub />} x="2vw" y="-19vw" />
        
        <Skill name="Jest" icon={<SiJest />} x="24vw" y="-18vw" />
        <Skill name="Storybook" icon={<SiStorybook />} x="-28vw" y="15vw" />
        <Skill name="Cypress" icon={<SiCypress />} x="30vw" y="15vw" />
        <Skill name="Mocha" icon={<SiMocha />} x="-23vw" y="-13vw" />
        <Skill name="Chai" icon={<SiChai />} x="-15vw" y="-20vw" />
       
      </div>
    </>
  );
};

export default Skills;
