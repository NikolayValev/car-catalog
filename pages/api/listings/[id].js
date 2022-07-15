import { listings } from '../../../data'
function getBodyType(id){
switch (id) {
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
  default:
    break;
}
}
export default async function handler({ query: { id } }, res) {
  //Add the Functionality to search for all available models for a given bodytype
  //Body type is hardcoded as 1-6 as per data.js
  let bodyType = getBodyType(id)
  let mercAPIKey = '4643ede2-330b-46af-94a4-0a237a0b8e34'
  const data = await fetch(`https://api.mercedes-benz.com/configurator/v1/markets/en_DE/models?apikey=${mercAPIKey}`)
  const mercedes_vehicles = await data.json()
  //console.log(mercedes_vehicles);

  const filtered = listings.filter((listing) => listing.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Listing with the id of ${id} is not found` })
  }
}