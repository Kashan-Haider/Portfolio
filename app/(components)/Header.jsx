"use client";
import React from "react";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.design} ></div>
      <div className={styles.design2} ></div>
      <div className={styles.nav}>
        <InView>
          {({ ref, inView }) => (
            <div ref={ref}>
              <motion.div
                className={styles.logo}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <Link href={"./"}>
                  <img src="./logo.png" alt="" />
                </Link>
              </motion.div>
            </div>
          )}
        </InView>
      </div>
      <div className={styles.header}>
        <InView>
          {({ ref, inView }) => (
            <div ref={ref}>
              <motion.div
                className={styles.text}
                initial={{ x: "-100vw" }}
                animate={inView ? { x: 0 } : {}}
                transition={{ duration: 1 }}
              >
                <h2>
                  <span>Welcome</span>, I'm
                </h2>
                <h1 className={styles.glow}>
                  Kashan <span>Haider</span>
                </h1>
                <h2>
                  Web Design Wizardry: <span>Turning Ideas into Reality</span>
                </h2>
                <p>
                  As a <span>Next.js</span> and <span>React.js</span> developer,
                  I have a deep understanding of modern web development
                  practices and the latest technologies in the field.With a
                  focus on performance, scalability, and user-centered design, I
                  have honed my skills in the latest web technologies to bring
                  beautiful and functional websites to life.
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
                transition={{ duration: 1 }}
              >
                <img src="./kashan.png" alt="" />
              </motion.div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default Header;
