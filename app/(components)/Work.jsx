import React from "react";
import styles from "./work.module.css";
import WorkBox from "./workBox/WorkBox";
import {BsArrowRight} from "react-icons/bs";

const Work = () => {
  return (
    <div className={styles.main}>
      <div className={styles.design}></div>
      <div className={styles.design2}></div>
      <div className={styles.design3}></div>
      <div className={styles.design4}></div>
      <div className={styles.design5}></div>
      <div className={styles.design6}></div>

      <div className={styles.heading}>
        <h1>My <span>Work</span></h1>
        <div className={styles.scrollHeading} >
     <span>
     <h2>Scroll For More</h2>
      <div className={styles.icon} ><BsArrowRight/></div>
     </span>
        </div>
      </div>
      <div className={styles.body}>
      <WorkBox
          image="/images/panaverse.png"
          title="Panaverse"
          description="It is a concept website for pamaverse including many animations and a beautiful theme with a responsive behaviou for all devices."
          link="https://panaverse-kashan-awanpro786-gmailcom.vercel.app/"
        />
      <WorkBox
          image="/images/weather.png"
          title="Weather App"
          description="It is a responsive Weather App which gives the weather of any city you ask and also provides imoprtant weather details like humidity , wind speed and direction e.t.c ."
          link="https://weather-app-awanpro786-gmailcom.vercel.app"
        />
      <WorkBox
          image="/images/todo.png"
          title="Todo App"
          description="It is a resposive Todo App with adding and deleting functionality. I tried to add a neon theme to the todo app."
          link="https://todo-list-awanpro786-gmailcom.vercel.app/"
        />
        <WorkBox
          image="/images/login.png"
          title="Login Page"
          description="It is a Login Page including a sign up page which opens when click on the Sign up button. The border colour of inputs changes to white when they aren't empty."
          link="https://login_codebent.surge.sh/"
        />
        <WorkBox
          image="/images/codebent.png"
          title="codeBENT"
          description="codeBENT is a responsive website with beautiful design. While we may lack the functionality and interactivity of dynamic sites, our focus is on providing users with a straightforward and clear experience."
          link="https://codebent_ai.surge.sh/"
        />
        <WorkBox
          image="/images/boldo.png"
          title="Boldo"
          description="Boldo is a responsive website with graphs and numbers. It has different numerical and graphical presentations."
          link="https://boldo_codebent_.surge.sh/"
        />
        <WorkBox
          image="/images/plant.png"
          title="Plant Gallery"
          description="Plant Gallery is a responsive website with beautiful plant pictures made in HTML and CSS using Flexbox and Grid Layout."
          link="https://plant-gallery.surge.sh/"
        />
      </div>
    </div>
  );
};

export default Work;
