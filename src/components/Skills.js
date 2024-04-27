import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaCss3, FaPython, FaFigma, FaNodeJs, FaHtml5, FaSass, FaBootstrap, FaGithub } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { DiRuby, DiJqueryLogo } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiExpress, SiCanva, SiRubyonrails, SiPrisma, SiJest, SiStorybook, SiCypress, SiMocha, SiChai, SiMongodb } from "react-icons/si";
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
          <FaCode size={25} />
        </motion.div>
        <Skill name="CSS" icon={<FaCss3 />} x="-8vw" y="-10vw" />
        <Skill name="HTML" icon={<FaHtml5 />} x="-8vw" y="10vw" />
        <Skill name="Javascript" icon={<IoLogoJavascript />} x="-13vw" y="0vw"  />
        <Skill name="ReactJS" icon={<RiReactjsFill />} x="-26vw" y="0vw" />
        <Skill name="NextJS" icon={<TbBrandNextjs />} x="25vw" y="0vw" />
        <Skill name="Figma" icon={<FaFigma />} x="9vw" y="-10vw" />
        <Skill name="Ruby" icon={<DiRuby />} x="-0vw" y="8vw" />
        <Skill name="Tailwind CSS" icon={<SiTailwindcss />} x="-20vw" y="7vw" />
        <Skill name="NodeJS" icon={<FaNodeJs />} x="0vw" y="-20vw" />
        <Skill name="Typescript" icon={<SiTypescript />} x="12vw" y="0vw" />
        <Skill name="Express" icon={<SiExpress />} x="-30vw" y="-10vw" />
        <Skill name="Python" icon={<FaPython />} x="-0vw" y="-8vw" />
        <Skill name="SASS" icon={<FaSass />} x="20vw" y="5vw" />
        <Skill name="Bootstrap" icon={<FaBootstrap />} x="20vw" y="-5vw" />
        <Skill name="Ruby on Rails" icon={<SiRubyonrails />} x="18vw" y="15vw" />
        <Skill name="Jest" icon={<SiJest />} x="28vw" y="-5vw" />
        <Skill name="Storybook" icon={<SiStorybook />} x="-28vw" y="5vw" />
        <Skill name="Cypress" icon={<SiCypress />} x="30vw" y="10vw" />
        <Skill name="Mocha" icon={<SiMocha />} x="-30vw" y="15vw" />
        <Skill name="Chai" icon={<SiChai />} x="32vw" y="-15vw" />
        <Skill name="PostgreSQL" icon={<BiLogoPostgresql />} x="35vw" y="5vw" />
        <Skill name="MySQL" icon={<GrMysql />} x="-35vw" y="-5vw" />
        <Skill name="MongoDB" icon={<SiMongodb />} x="0vw" y="30vw" />
        <Skill name="Prisma" icon={<SiPrisma />} x="10vw" y="30vw" />
        <Skill name="Canva" icon={<SiCanva />} x="20vw" y="30vw" />
        <Skill name="GitHub" icon={<FaGithub />} x="-10vw" y="30vw" />
      </div>
    </>
  );
};

export default Skills;
