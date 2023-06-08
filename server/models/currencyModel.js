import mongoose from "mongoose";


const CryptoSchema = new mongoose.Schema({
    name: String,
    last: String,
    buy: String,
    sell: String,
    volume: String,
    base_unit: String
  });
const CryptoModel = mongoose.model('Crypto', CryptoSchema);
export default CryptoModel;