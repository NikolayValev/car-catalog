import Link from 'next/link'
import listingStyles from '../styles/Listing.module.css'

const ListingItem = ({ listing }) => {
  return (
    <Link href={`/listing/${listing.id}`}>
      <a className={listingStyles.card}>
        <h3>{listing.title} &rarr;</h3>
        <p>{listing.excerpt}</p>
      </a>
    </Link>
  )
}

export default ListingItem