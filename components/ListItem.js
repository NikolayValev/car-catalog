import Link from 'next/link'
import listingStyles from '../styles/Listing.module.css'
import Image from 'mui-image'

const ListingItem = ({ listing }) => {
  return (
    <Link href={`/listing/${listing.id}`}>
      <a className={listingStyles.card}>
        <h3>{listing.title} &rarr;</h3>
        <p>{listing.excerpt}</p>
        <Image
          src={listing.picture}
          fit="fill"
          height="100%"
          width="100%"
          duration={0}
          easing="cubic-bezier(0.7,0,0.6,1)"
          errorIcon={true}
          distance="100px"
          bgColor="inherit"
        ></Image>
      </a>
    </Link>
  )
}

export default ListingItem