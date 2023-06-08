
import axios from 'axios'
import CryptoModel from '../models/currencyModel.js';

export const fetchData = async (req, res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');

        const top10Results = Object.values(response.data).slice(0, 10);

        for (const result of top10Results) {
            const { name, last, buy, sell, volume, base_unit } = result;

            const crypto = new CryptoModel({
                name,
                last,
                buy,
                sell,
                volume,
                base_unit
            });

            await crypto.save();
        }

        res.json({ message: 'Data fetched and stored successfully.' });
    } catch (error) {
        console.error('Error fetching and storing data:', error);
        res.status(500).json({ error: 'Error fetching and storing data.' });
    }
}