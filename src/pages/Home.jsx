import Hero from '../components/hero'
import styles from '../styles/Home.module.scss'

export default function Home() {

  return (
    <div className={styles.Home}>
      <h1>Home</h1>
      <Hero />
    </div>
  )
}

