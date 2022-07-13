import Head from 'next/head'
import Image from 'next/image'
import Listings from '../components/Listings'
import { server } from '../config'
import styles from '../styles/Home.module.css'

export default function Home({ listings }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boat Listings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Listings listings={listings} />
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/listings`)
  const listings = await res.json()

  return {
    props: {
      listings,
    },
  }
}