import { useEffect, useState } from 'react'
import styles from '../../styles/Activities.module.scss'
import CardList from '../../components/cardList'
import GET from '../../utils/http'

export default function Activities() {

    const [data, setData] = useState([])

    useEffect(() => {
        GET("/tour_dossiers")
        .then((data) => setData(data.results))
    }, [])

    return (
        <div className={styles.Activities}>
            <h1>Activities</h1>
            <CardList data={data} />
        </div>
    )
}
