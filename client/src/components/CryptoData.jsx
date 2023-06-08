import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoData.css'

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cryptoData/fetchDataFromDB');
        const {data} = response
        console.log(data.response)
        setCryptoData(data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{
        overflow:'auto'
    }}>
    <table className="crypto-table">
      <thead>
        <tr>
          <th className='table-cell'>Name</th>
          <th className='table-cell'>Last</th>
          <th className='table-cell'>Buy</th>
          <th className='table-cell'>Sell</th>
          <th className='table-cell'>Volume</th>
          <th className='table-cell'>Base Unit</th>
        </tr>
      </thead>
      <tbody>
        {cryptoData && cryptoData.map((crypto, index) => (
          <tr key={index}>
            <td>{crypto.name}</td>
            <td>{crypto.last}</td>
            <td>{crypto.buy}</td>
            <td>{crypto.sell}</td>
            <td>{crypto.volume}</td>
            <td>{crypto.base_unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default CryptoTable;
