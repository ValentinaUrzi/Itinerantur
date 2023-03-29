import Logo from '../../assets/logo_w.png'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <img src={Logo} alt="itinerantur logo" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/activities">Activities</Link>
                </li>
                <li>
                    {/* <Link to="/cities">Cities</Link> */}
                </li>
            </ul>
        </div>
    )
}

export default Navbar