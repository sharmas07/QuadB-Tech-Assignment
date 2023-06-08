import CryptoModel from "../models/currencyModel.js";

export const fetchDataFromDB = async (req, res) => {
    try {
       
        const cryptoData = await CryptoModel.find();
        

        res.json({ message: 'Data fetched successfully from db.', response:cryptoData});
    } catch (error) {
        console.error('Error fetching and storing data:', error);
        res.status(500).json({ error: 'Error fetching and storing data.' });
    }
}