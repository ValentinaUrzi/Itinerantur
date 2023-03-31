import styles from './id.module.scss';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import GET from '../../utils/http';

export default function Activity() {

    const [activityData, setActivityData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        GET(`/tour_dossiers/${id}`)
            .then((data) => setActivityData(data));
    }, [])

    return (
        <div className={styles.Activity}>
            <h2>{activityData.name}</h2>
            <Link to={`/activities`}>Indietro</Link>
            <div className={styles.wrapper}>
                <img src={activityData.images?.[4].image_href} alt={activityData.name} />
                <div className={styles.texts}>
                    <p>{activityData.description}</p>
                    <span>{`Data inizio partenze: ${activityData.departures_start_date?.split('-').reverse().join('/') || "Data non disponibile"}`}</span>
                    <span>{`Data termine partenze: ${activityData.departures_end_date?.split('-').reverse().join('/') || "Data non disponibile"}`}</span>
                </div>
            </div>
        </div>
    )
}