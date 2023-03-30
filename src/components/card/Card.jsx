import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GET from '../../utils/http'
import styles from './index.module.scss'

const Card = ({ data }) => {

    const [images, setImages] = useState("")

    const selectId = useNavigate();

    useEffect(() => {
        GET(`/tour_dossiers/${data.id}`).then((data) => setImages(data.images?.[3].image_href));
    }, [])

    useEffect(() => {},[])

    const onHandleClick = () => {
        selectId(`${data.id}`);
    };
    return (
        <div onClick={onHandleClick} className={styles.Card}>
            <h2>{data.name}</h2>
            <img src={images || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNGGjrfSqqv8UjL18xS4YypbK-q7po_8oVQ&usqp=CAU"} alt={data.name} />
        </div>
    )
}

export default Card