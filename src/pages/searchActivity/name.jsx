import styles from './name.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GET from '../../utils/http';
import CardList from '../../components/cardList';

export default function SearchActivity() {

    const [data, setData] = useState([])
    const { name } = useParams()

    useEffect(() => {
        GET(`/tour_dossiers?name=${name}`)
            .then((data) => setData(data.results));
    }, [])

    return (
        <div className={styles.Activities}>
            {data.length? <CardList data={data} /> : "Il paese cercato non è tra i nostri itinerari"}
        </div>
    )
}
