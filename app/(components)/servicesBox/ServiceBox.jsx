"use client";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./serviceBox.module.css";

const ServiceBox = (props) => {
  return (
    <InView>
      {({ ref, inView }) => (
        <div ref={ref}>
          <motion.div className={styles.wrapper}>
            <div className={styles.main}>
              <div className={styles.text}>
                <h1>{props.title}</h1>
              </div>
              <div className={styles.image}>
                <img src={props.image} />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </InView>
  );
};

export default ServiceBox;
