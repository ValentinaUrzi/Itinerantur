import styles from '../styles/Activity.module.scss'
import Footer from '../components/footer'
import Header from '../components/header'
// import { Outlet } from 'react-router-dom'

export default function Activity() {
    return (
        <div className={styles.Activity}>
            <Header />
            <h1>Activity</h1>
            <Footer />
            {/* <Outlet /> */}
        </div>
    )
}