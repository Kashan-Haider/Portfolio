import React from 'react'
import styles from "./testimonial.module.css"

const Testimonial = (props) => {
  return (
    <div className={styles.main} >
        <div className={styles.styles} >
        <div className={`${styles.red} . ${styles.styleElement }`} ></div>
        <div className={`${styles.yellow} . ${styles.styleElement }`} ></div>
        <div className={`${styles.green} . ${styles.styleElement }`} ></div>
        </div>
        <div className={styles.text} >
        <h2>{props.name}</h2>
        <p>{props.body}</p>
        </div>
    </div>
  )
}

export default Testimonial