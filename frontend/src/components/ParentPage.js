
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParentsPage = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    // Fetch paginated schools data from backend when component mounts
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('http://localhost:3332/api/schools');
      setSchools(response.data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  return (
    <div>
      <h1>Parents Page</h1>
      <div>
        {schools.map(school => (
          <div key={school._id}>
            <h2>{school.name}</h2>
            <p>Fees: {school.fees}</p>
            {/* Display other basic details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentsPage;
