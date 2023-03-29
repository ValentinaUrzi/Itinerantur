import Card from '../card'
import styles from './index.module.scss'

const CardList = ({data}) => {

    return (
        <div className={styles.CardList}>
            {data.map((data) => <Card data={data} key={data.city.id} />)}
        </div>
    )
}

export default CardList