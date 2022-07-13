import Link from 'next/link'
import listingStyles from '../styles/Listing.module.css'

const ArticleItem = ({ listing }) => {
  return (
    <Link href={`/article/${listing.id}`}>
      <a className={listingStyles.card}>
        <h3>{listing.title} &rarr;</h3>
      </a>
    </Link>
  )
}

export default ArticleItem