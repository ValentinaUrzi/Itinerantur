import styles from './id.module.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Activity() {

    const [activityData, setActivityData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.musement.com/api/v3/activities/${id}.json`)
            .then((res) => res.json())
            .then((data) => setActivityData(data));
    }, [])
    
    return (
        <div className={styles.Activity}>
            <h2>{activityData.title}</h2>
            <div className={styles.wrapper}>
                <img src={activityData.cover_image_url} alt={activityData.title} />
                <p>{activityData.about}</p>
            </div>
        </div>
    )
}