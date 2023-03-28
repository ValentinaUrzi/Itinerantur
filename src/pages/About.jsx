import styles from '../styles/About.module.scss'
import Footer from '../components/footer'
import Header from '../components/header' 
// import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div className={styles.About}>
      <Header />
      <h1>About</h1>
      <Footer />
      {/* <Outlet /> */}
    </div>
  )
}