import Head from 'next/head'
import DataTable from '../components/DataTable';
import styles from '../styles/VehicleTable.module.css'
import clientPromise from "../lib/mongodb";
//import db from "../mongodb";

const about = (mercedes_vehicles) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DataTable props={mercedes_vehicles}></DataTable>
    </div>
  )
}
export async function getStaticProps(context) {
  const client = await clientPromise;

  const db = client.db("MercedesInventory");

  let mercedes_vehicles = await db.collection("Mercedes Models").find({}).toArray();
  mercedes_vehicles = JSON.parse(JSON.stringify(mercedes_vehicles));
  //console.log(users);
  return {
    props: { mercedes_vehicles },
  };
}
//get the data for the table
/*
export const getStaticProps = async () => {
  //Lets try to connect to the mongo db
  //const idk = await getMongoData();
  const res = await fetch(`${server}/api/mercedes`)
  const mercedes_vehicles = await res.json()
  //console.log(mercedes_vehicles);

  return {
    props: {
      mercedes_vehicles,
    },
  }
}
*/
export default about