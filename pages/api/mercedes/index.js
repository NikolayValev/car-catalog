//import { mercAPIKey } from '../../config'
import clientPromise from "../../../lib/mongodb";
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("MercedesInventory");
  let models = await db.collection("Mercedes Models").find({}).toArray();
  models = JSON.parse(JSON.stringify(models));
  console.log(models)
  return {
    props: { models },
  };
}

/*
export default async function handler(req, res) {
  let mercAPIKey = `a5255383-8a82-433a-826d-d10d0e6e41a6`
  const data = await fetch(`https://api.mercedes-benz.com/configurator/v1/markets/en_DE/models?apikey=${mercAPIKey}`)
  const mercedes_vehicles = await data.json()
  console.log(mercedes_vehicles);
  res.status(200).send(mercedes_vehicles)
}
*/