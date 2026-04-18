import Image from 'next/image'
import styles from './page.module.css'

const BlogPost = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Lorem ipsum dolor sit
            </h1>
            <p className={styles.desc}>
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
            <div className={styles.author}>
              <Image
              src='/profile.jpeg'
              width={40}
              height={40}
              className={styles.avatar}
               />
               <span className={styles.username}>John Doe</span>
             
            </div>
             
          </div>
          
          <div className={styles.imageContainer}>
            <Image
            src='/cpn.png'
            fill={true}
            className={styles.image}
            
            />
          </div>


        </div>
        <div className={styles.content}>
          <p className={styles.text}>
             <p className={styles.desc}>
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog

              <br />
              <br />
               The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
              The Quick Brown Fox Jumps Over The Lazy Dog
            </p>
          </p>
        </div>

    </div>
  )
}

export default BlogPost