import clientPromise from "../../../lib/mongodb";

const agg = [
  {
    '$group': {
      '_id': 0,
      'brand': {
        '$addToSet': '$brand'
      },
      'year': {
        '$addToSet': '$year'
      },
      'selling_price': {
        '$addToSet': '$selling_price'
      },
      'km_driven': {
        '$addToSet': '$km_driven'
      },
      'fuel': {
        '$addToSet': '$fuel'
      },
      'seller_type': {
        '$addToSet': '$seller_type'
      },
      'transmission': {
        '$addToSet': '$transmission'
      },
      'owner': {
        '$addToSet': '$owner'
      },
      'mileage': {
        '$addToSet': '$mileage'
      },
      'max_power': {
        '$addToSet': '$max_power'
      },
      'seats': {
        '$addToSet': '$seats'
      }
    }
  }
];
function cleanData(aggregateData) {
  //Name -> Brand / Model
  //TODO(nvalev) Split the name into a searchable brand and model combination
  //Number of seats
  let seats = Array.from(aggregateData.seats)
  let seatsClean  = seats.filter(function (e) { return e });
  seatsClean.sort(function (a, b) { return a - b; });

  //Year
  let yearsClean = Array.from(aggregateData.year).filter(function (e) { return e })
  .sort(function (a, b) { return a - b; });

  //Price Min and Max
  let sellingPrice = Array.from(aggregateData.selling_price).filter(function (e) { return e })
  let minPrice = Math.min(...sellingPrice)
  let maxPrice = Math.max(...sellingPrice)

  //Km driven Min and Max
  let kmDriven = Array.from(aggregateData.km_driven).filter(function (e) { return e })
  let minKmDriven = Math.min(...kmDriven)
  let maxKmDriven = Math.max(...kmDriven)
  return {
    "Brand": aggregateData.brand,
    "Seats": seatsClean,
    "Fuel": aggregateData.fuel,
    "Seller": aggregateData.seller_type,
    "Transmission": aggregateData.transmission,
    "Owner": aggregateData.owner,
    "Year": yearsClean,
    "MaxPrice": maxPrice,
    "MinPrice": minPrice,
    "MaxKm": maxKmDriven,
    "MinKm": minKmDriven,
  }
}
export default async function handler(req, res) {
  //connect
  const client = await clientPromise;
  const db = client.db("MercedesInventory");
  const coll = await db.collection("CarDataFinal")
  //get the descriptors for the fillterable values
  const cursor = coll.aggregate(agg);
  let result = await cursor.toArray();
  //clean the data
  let clean = cleanData(result[0])
  //res.json(result[0])
  res.json(clean)
  return res.status(200).end();
}