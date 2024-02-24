import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
// import './Search.css';

const Search = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-qkzjg/endpoint/get_data_table');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  });

  const formatTime = (time) => {
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
  };

  // Filter data based on multiple fields
  const filteredData = searchTerm
    ? data.filter(item =>
      (formatTime(item.time) && formatTime(item.time).toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.currentangle && item.currentangle.toString().includes(searchTerm)) ||
      (item.prediction && item.prediction.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    : [];

  const handleReset = () => {
    setSearchTerm('');
  };



  return (
    <div className="search-container">
      <div>
        <p>Search sound and angle:</p>
        <input
          className="search-input"
          type="text"
          placeholder="Search ...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleReset}>Reset</button>
      </div>

      {searchTerm && (
        <ul className="search-list">
          {filteredData.slice(0, 5).map((item, index) => (
            <li key={index} className="search-item">
              {/* Render each property separately */}
              <div>
                <strong>Time:</strong> {formatTime(item.time)}
              </div>
              <div>
                <strong>Angle:</strong> {item.currentangle}
              </div>
              <div>
                <strong>Sound:</strong> {item.prediction}
              </div>
              <div>
                <strong>Command:</strong> {item.command}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
