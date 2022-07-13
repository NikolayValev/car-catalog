import ListItem from './ListItem'
import listingStyles from '../styles/Listing.module.css'

const Listings = ({listings}) => {
  return (
    <div className={listingStyles.grid}>
      {listings.map((listing) => (
        <ListItem listing={listing} />
      ))}
    </div>
  )
}

export default Listings;