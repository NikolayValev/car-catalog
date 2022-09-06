import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Box, Container, CssBaseline, Grid, Toolbar,
} from "@mui/material";
import ChipSelect from '../components/ChipSelect';
import { server } from '../config'
//import clientPromise from "../lib/mongodb";
export default function Used({ descriptions }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Used cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          height: "100vh",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container maxWidth="lg" sx={{
          mt: 4,
          mb: 4,
          flexGrow: 1,
        }}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <ChipSelect props={descriptions.Brand} name="Brand"></ChipSelect>
            <ChipSelect props={descriptions.Seats} name="Seats"></ChipSelect>
            <ChipSelect props={descriptions.Fuel} name="Fuel"></ChipSelect>
            <ChipSelect props={descriptions.Seller} name="Seller Type"></ChipSelect>
            <ChipSelect props={descriptions.Transmission} name="Transmission"></ChipSelect>
            <ChipSelect props={descriptions.Owner} name="Owner"></ChipSelect>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(`${server}/api/usedcars/descriptors`)
  const descriptions = await res.json()
  return {
    props: {
      descriptions,
    },
  }
}