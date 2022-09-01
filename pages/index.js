import Head from 'next/head'
import Image from 'next/image'
import Listings from '../components/Listings/Listings'
import { server } from '../config'
import styles from '../styles/Home.module.css'

export default function Home({ listings }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercedes Benz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Listings listings={listings} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/listings`)
  const listings = await res.json()
  return {
    props: {
      listings,
    },
  }
}
