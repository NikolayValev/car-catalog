import { Schema } from "mongoose";

// Grouped findings data model
const schema = new Schema({
  engine: String,
  fuel: String,
  km_driven: Number,
  max_power: String,
  mileage: String,
  name: String,
  owner: String,
  seats: Number,
  seller_type: String,
  selling_price: Number,
  torque: Number,
  transmission: String,
  year: Number,
});