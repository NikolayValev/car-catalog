import Meta from '../components/Meta'
import Head from 'next/head'
import ComboBox from '../components/Combobox';
import CheckboxList from '../components/ListCheckBox'
import DataTable from '../components/DataTable';
import styles from '../styles/VehicleTable.module.css'
import { server } from '../config'

const about = (mercedes_vehicles) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={callAPI}>Make API call</button>
      <DataTable props={mercedes_vehicles}></DataTable>
    </div>
  )
}
const callAPI = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
//get the data for the table
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/mercedes`)
  const mercedes_vehicles = await res.json()
  //console.log(mercedes_vehicles);

  return {
    props: {
      mercedes_vehicles,
    },
  }
}

export default about