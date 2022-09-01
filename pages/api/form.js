import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.email || !body.subject || !body.message) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Some part of the form is not found!' })
  }
  // Found the name.
  //now Push it to the db
  const client = await clientPromise;
  const db = client.db("MercedesInventory");
  const coll = db.collection("ContactForms");
  try {
    coll.insertOne(body);
  } catch (e) {
    print(e);
  };
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.name} ${body.email} ${body.subject} ${body.message}` })
}