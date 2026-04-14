import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import photo from '../../../public/aboutus.webp'
import Button from '../components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={photo} fill={true} alt='' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Telllers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>

        </div>

      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
        <h1 className={styles.title}>
          Who We Are
        </h1>
        <p className={styles.desc}>
          We’re a team driven by curiosity, creativity, and a passion for building meaningful experiences. What started as a simple idea has grown into something much bigger a place where innovation meets purpose. Every project we take on is guided by a commitment to quality, attention to detail, and a genuine desire to make a positive impact.
          <br />
          <br />
          Our approach is simple: listen carefully, think thoughtfully, and create with intention. We believe that great results come from collaboration, transparency, and a willingness to challenge the ordinary. Whether we’re developing new ideas or refining existing ones, we aim to deliver work that not only meets expectations but exceeds them.
          At our core, we value authenticity and continuous growth. We’re always learning, evolving, and pushing boundaries to stay ahead in a fast-changing world. Most importantly, we’re here to build something that lasts—connections, solutions, and experiences that people can trust and enjoy.

          <br />
          <br />
        </p>
        </div>

          <div className={styles.item}>
      <h1 className={styles.title}>
        What We Do
      </h1>
        <p className={styles.desc}> 
          At our core, we value authenticity and continuous growth. 
          We’re always learning, evolving, and pushing boundaries to stay ahead in a fast-changing world. 
          Most importantly, we’re here to build something that lasts—connections, solutions, and experiences that people can trust and enjoy.
        
          <br />
          <br /> - Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br />
          <br /> - Mobile Apps
        </p>
        <Button text="Contact" url="/contact" />
      </div>

      </div>
   
    
      

    </div>
  )
}

export default About