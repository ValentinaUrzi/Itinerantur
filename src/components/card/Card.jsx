import styles from './index.module.scss'

const Card = ({ data }) => {
    return (
        <div className={styles.Card}>
            <h2>{data.city.name}</h2>
            <img src={data.city.cover_image_url} alt={data.city.name} />
            <p>{data.description}</p>
        </div>
    )
}

export default Card