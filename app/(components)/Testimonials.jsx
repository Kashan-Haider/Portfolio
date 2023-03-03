"use client";

import React from "react";
import styles from "./testimonials.module.css";
import Testimonial from "./testimonialsBox/Testimonial";
import { useState } from "react";

const Testimonials = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [arr, setArr] = useState([
    {
      name: "Jack",
      body: "Great job! Your Next.js application is running smoothly and the user interface is impressive.",
    },
    {
      name: "Sarah",
      body: "Well done! Your use of Next.js for server-side rendering has significantly improved the application's performance.",
    },
    {
      name: "David",
      body: "Awesome work! The integration of Next.js with your API has made the application more scalable and efficient.",
    },
    {
      name: "Emily",
      body: "Fantastic job! Your use of Next.js for dynamic routing has greatly enhanced the user experience.",
    },
    {
      name: "Michael",
      body: "Excellent work! Your implementation of Next.js with TypeScript has improved the application's maintainability and code quality.",
    },
  ]);

  const handleSubmit = () => {
    if (name && feedback) {
      const newFeedback = {
        name: name,
        body: feedback,
      };
      setArr([newFeedback, ...arr]);
      setName("");
      setFeedback("");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.design}></div>
      <div className={styles.design2}></div>
      <div className={styles.design3}></div>
      <div className={styles.heading}>
        <h1>
          Feed<span>back</span>
        </h1>
        <h2>
          Write Something <span>About Me</span>
        </h2>
      </div>
      <div className={styles.userInput}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Write your thoughts ..."
          value={feedback}
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className={styles.body}>
        {arr.map((item, index) => {
          return <Testimonial name={item.name} body={item.body} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
