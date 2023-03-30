import Logo from '../../assets/logo_w.png'
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const Navbar = () => {

    const countryName = useNavigate();

    const searchActivity = (e) => {
        e.preventDefault()
        countryName(e.target[0].value ? "activity/search/" + e.target[0].value: "/activities")
    }

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
                <form onSubmit={searchActivity}>
                    <input type="text" name="search" placeholder='Cerca un paese o una città...' />
                </form>
            </ul>
        </div>
    )
}

export default Navbar