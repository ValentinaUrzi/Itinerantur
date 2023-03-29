import { useEffect, useState } from 'react'
import styles from '../../styles/Activities.module.scss'
import CardList from '../../components/cardList'

export default function Activities() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.musement.com/api/v3/activities.json")
        .then((res) => res.json())
        .then(({data}) => setData(data))
    }, [])

    console.log(data);
    return (
        <div className={styles.Activities}>
            <CardList data={data} />
        </div>
    )
}
