import styles from '../styles/City.module.scss'
import Footer from '../components/footer'
import Header from '../components/header' 
// import { Outlet } from 'react-router-dom'

export default function City() {
  return (
    <div className={styles.City}>
      <Header />
      <h1>City</h1>
      <Footer />
      {/* <Outlet /> */}
    </div>
  )
}