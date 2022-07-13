import ListItem from './ListItem'
import listingStyles from '../styles/Listing.module.css'

const Listings = ({ listings }) => {
  return (
    <div className={listingStyles.grid}>
      {listings.map((listing, key) => (
        <ListItem key={key} listing={listing} />
      ))}
    </div>
  )
}

export default Listings;