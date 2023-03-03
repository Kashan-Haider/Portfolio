import React from "react";
import styles from "./services.module.css";
import ServiceBox from "./servicesBox/ServiceBox";
import {BsArrowRight} from "react-icons/bs";
const Services = () => {
  return (
    <div className={styles.main}>
      <div className={styles.design}></div>
      <div className={styles.design2}></div>
      <div className={styles.design3}></div>
      <div className={styles.design4}></div>
      <div className={styles.design5}></div>
      <div className={styles.design6}></div>
      <div className={styles.heading}>
        <h1>
          What <span>I Got</span>
        </h1>
        <div className={styles.scrollHeading} >
     <span>
     <h2>Scroll For More</h2>
      <div className={styles.icon} ><BsArrowRight/></div>
     </span>
        </div>
      </div>
      <div className={styles.body}>
        <ServiceBox
          title="Craft visually stunning websites that are easy to navigate and use."
          image="./images/img1.png"
        />
        <ServiceBox
          title="Create user-centered designs that enhance the user experience."
          image="./images/img2.png"
        />
        <ServiceBox
          title="Designing websites that effectively communicate your brand."
          image="./images/img3.png"
        />
        <ServiceBox
          title="I create designs that evoke emotion and tell a story."
          image="./images/img4.png"
        />
        <ServiceBox
          title="I deliver responsive websites that adapt to any device."
          image="./images/img7.png"
        />
        <ServiceBox
          title="I stay up-to-date with the latest web design trends and technologies."
          image="./images/img6.png"
        />
      </div>
    </div>
  );
};

export default Services;
