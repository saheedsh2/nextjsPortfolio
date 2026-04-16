import React from 'react'
import styles from './page.module.css'
import Button from '@/app/components/Button/Button'
import Image from 'next/image'
const Category = ({params}) => {
  // console.log(params)
  return (
    <div className={styles.container}>
      <h2 className={styles.catTitle}>{params.category}</h2>
      <div className={styles.item}>
        <div className={styles.content}>
        <h1 className={styles.title}>Text</h1>
        <p className={styles.desc}>Description</p>
        <Button text='See More' url="#" />
        </div>
          <div className={styles.imgContainer}>
          <Image fill={true} src="/sysanalysis1.webp" className={styles.img}/>
        
        
          </div>
        
      
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
        <h1 className={styles.title}>Text</h1>
        <p className={styles.desc}>Description</p>
        <Button text='See More' url="#" />
        </div>
          <div className={styles.imgContainer}>
          <Image fill={true} src="/sysanalysis1.webp" className={styles.img}/>
        
        
          </div>
        
      
      </div>
    </div>
  )
}

export default Category