import Image from 'next/image'
import styles from './page.module.css'
import logo from '../../public/dva.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for digital Products</h1>
        <p className={styles.desc}>
          Transforming your ideas into reality, whether independently or collaboratively.
        </p>
        <button className={styles.button}>See Some Projects</button>
      </div>
      <div className={styles.item}>
      <Image src={logo} alt='logo'className={styles.img} />
      </div>
    </div>
  )
}
