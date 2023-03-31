import styles from './name.module.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import GET from '../../utils/http';
import CardList from '../../components/cardList';

export default function SearchActivity() {

    const [data, setData] = useState([])
    const [searchParams] = useSearchParams()

    useEffect(() => {
        if (searchParams.get("name")) GET(`/tour_dossiers?name=${searchParams.get("name")}`)
            .then((data) => setData(data.results));
    }, [])

    return (
        <div className={styles.Activities}>
            <h1>Results for: "{searchParams.get("name")}"</h1>
            {data.length ? <CardList data={data} /> : "Il paese cercato non è tra i nostri itinerari"}
        </div>
    )
}
