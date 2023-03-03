import React from "react";
import styles from "./skills.module.css";
import Skill from "./skillBox/Skill";
import { FaHtml5 ,FaCss3Alt , FaBootstrap , FaReact, FaFigma } from "react-icons/fa";
import {TbBrandJavascript , TbBrandNextjs} from "react-icons/tb";
import {SiTailwindcss , SiChakraui , SiTypescript , SiCplusplus} from "react-icons/si";

const Skills = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <h1>My <span>Skills</span></h1>
      </div>
      <div className={styles.design} ></div>
      <div className={styles.design2} ></div>
      <div className={styles.content} >
      <Skill
        icon={<FaHtml5 />}
        name="HTML"
        width = "97%"
      />
      <Skill
        icon={<FaCss3Alt />}
        name="CSS"
        width = "93%"
      />
      <Skill
        icon={<TbBrandJavascript />}
        name="JavaScript"
        width = "90%"
      />
      <Skill
        icon={<SiTailwindcss />}
        name="Tailwind"
        width = "94%"
      />
      <Skill
        icon={<FaBootstrap />}
        name="Bootstrap"
        width = "95%"
      />
      <Skill
        icon={<FaReact />}
        name="React JS"
        width = "85%"
      />
      <Skill
        icon={<TbBrandNextjs />}
        name="Next JS"
        width = "85%"
      />
      <Skill
        icon={<SiChakraui />}
        name="Chakra UI"
        width = "95%"
      />
      <Skill
        icon={<SiTypescript />}
        name="Typescript"
        width = "90%"
      />
      <Skill
        icon={<FaFigma />}
        name="Figma"
        width = "80%"
      />
      <Skill
        icon={<SiCplusplus />}
        name="C++"
        width = "65%"
      />
      </div>
    </div>
  );
};

export default Skills;
