//import { mercAPIKey } from '../../config'
export default async function handler(req, res) {
  let mercAPIKey = '4643ede2-330b-46af-94a4-0a237a0b8e34'
  const data = await fetch(`https://api.mercedes-benz.com/configurator/v1/markets/en_DE/models?apikey=${mercAPIKey}`)
  const mercedes_vehicles = await data.json()
  //console.log(mercedes_vehicles);
  res.status(200).send(mercedes_vehicles)
}