"use client";

import React from "react";
import styles from "./skill.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Skill = (props) => {
  return (
    <InView>
      {({ ref, inView }) => (
        <div ref={ref}>
          <motion.div
            className={styles.boxMain}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className={styles.head}>
              <i>{props.icon}</i>
              <h1>{props.name}</h1>
            </div>
            <div className={styles.bottom}>
              <div className={styles.skills}>
                <div className={styles.line}></div>
                <InView>
                  {({ ref, inView }) => (
                    <div ref={ref}>
                      <motion.div
                        className={styles.filled}
                        initial={{ width: 0 }}
                        animate={inView ? { width: props.width } : {}}
                        transition={{ duration: 1.5 }}
                      >
                        <span></span>
                      </motion.div>
                    </div>
                  )}
                </InView>
              </div>
              <p>{props.width}</p>
            </div>
          </motion.div>
        </div>
      )}
    </InView>
  );
};

export default Skill;

//            <span style={{width :`${props.width}` }} className={styles.filled}></span>
