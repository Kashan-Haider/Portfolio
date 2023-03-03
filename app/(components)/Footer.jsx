import React from "react";
import styles from "./footer.module.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.contact}>
        <h1>Contact Now</h1>
        <div className={styles.links}>
          <Link className={styles.linkItem} href={"https://www.facebook.com/kashi.awan.52687506"}>
            <BsFacebook />
          </Link>
          <Link className={styles.linkItem} href={"https://twitter.com/gGaming62046432"}>
            <BsTwitter />
          </Link>
          <Link className={styles.linkItem} href={"https://www.instagram.com/ka_sha_n/"}>
            <BsInstagram />
          </Link>
          <Link className={styles.linkItem} href={"https://github.com/Kashan-Haider"}>
            <BsGithub />
          </Link>
          <Link className={styles.linkItem} href={"https://www.linkedin.com/in/kashan-haider-ab2a56230/"}>
            <BsLinkedin />
          </Link>
        </div>
        <div className={styles.copyright} >
<p>COPYRIGHT 2023-KASHAN HAIDER ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
