import styles from './id.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
            <div className={styles.wrapper}>
                <img src={activityData.images?.[4].image_href} alt={activityData.name} />
                <p>{activityData.about}</p>
            </div>
        </div>
    )
}