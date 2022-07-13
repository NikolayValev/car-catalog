import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

const listing = ({ listing }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <Meta title={listing.title} description={listing.excerpt} />
      <h1>{listing.title}</h1>
      <p>{listing.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/listings/${context.params.id}`)

  const listing = await res.json()

  return {
    props: {
      listing,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/listings`)

  const listings = await res.json()

  const ids = listings.map((listing) => listing.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
export default listing