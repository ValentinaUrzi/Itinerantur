import styles from './index.module.scss'
import Logo from '../../assets/logo_w.png'

const Header = () => {
    return (
        <div className={styles.Header}>
            <img src={Logo} alt="itinerantur logo" />
            <div className={styles.text}>
                <h2>Chi siamo</h2>
                <h2>Mission</h2>
            </div>
        </div>
    )
}

export default Header