import { useEffect, useState } from 'react'
import { GET } from '../utils/http'
import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'
import styles from '../styles/Home.module.scss'
// import { Outlet } from 'react-router-dom'

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    GET("https://api.musement.com/api/v3/activities.json").then(({ data }) => setData(data))
  }, [])

  return (
    <div className={styles.Home}>
      <Header />
      <div className={styles.wrapper}>
        {data.map((data) => <Card data={data} key={data.city.id} />)}
        </div>
      <Footer />
      {/* <Outlet /> */}
    </div>
  )
}

