"use client";
import React from "react";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.design} ></div>
      <div className={styles.body}>
        <InView>
          {({ ref, inView }) => (
            <div ref={ref}>
              <motion.div
                className={styles.text}
                initial={{ x: "-100vw" }}
                animate={inView ? { x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h1>
                  About <span>Me</span>
                </h1>
                <h2>I am a <span>Web Designer</span></h2>
                <p>
                  I am passionate about creating
                  visually appealing and user-friendly websites that deliver a
                  seamless online experience. I have a keen eye for design, an
                  understanding of the latest web technologies, and the ability
                  to turn complex ideas into simple and intuitive interfaces. I
                  am a freelance developer with expertise in both Next.js and
                  React.js. I have a deep understanding of both technologies and
                  how to use them to create high-performing, scalable web
                  applications. I have a strong portfolio of successful
                  projects, demonstrating my ability to deliver quality results
                  on time and within budget. Whether you're looking to build a
                  new web application from scratch, or improve an existing one,
                  I have the skills and experience to help.
                </p>
              </motion.div>
            </div>
          )}
        </InView>
        <InView>
          {({ ref, inView }) => (
            <div ref={ref}>
              <motion.div
                className={styles.image}
                initial={{ x: "100vw" }}
                animate={inView ? { x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <img src="./about.png" alt="" />
              </motion.div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default About;
