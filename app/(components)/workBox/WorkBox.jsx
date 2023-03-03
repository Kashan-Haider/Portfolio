"use client"
import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import styles from "./workBox.module.css";
import Link from "next/link";

const WorkBox = (props) => {
  return (
    <InView>
      {({ ref, inView }) => (
        <div ref={ref}>
          <motion.div
            className={styles.wrapper}
          >
            <div className={styles.main}>
              <div className={styles.image}>
                <img src={props.image} />
              </div>
              <div className={styles.text}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <Link href={props.link}>
                  <button>Live View</button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </InView>
  );
};

export default WorkBox;
