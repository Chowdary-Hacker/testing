
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [schools, setSchools] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    fees: '',
    // Add other basic details here
  });

  useEffect(() => {
    // Fetch schools data from backend when component mounts
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3332/api/schools', formData);
      fetchSchools();
      setFormData({
        name: '',
        fees: '',
        // Reset other basic details
      });
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="School Name" />
        <input type="text" name="fees" value={formData.fees} onChange={handleChange} placeholder="School Fees" />
        {/* Add other input fields for basic details */}
        <button type="submit">Add School</button>
      </form>
      <div>
        {schools.map(school => (
          <div key={school._id}>
            <h2>{school.name}</h2>
            <p>Fees: {school.fees}</p>
            {/* Display other basic details */}
            <button>Edit</button>
            <button onClick={async () => {
    try{
      await axios.delete('http://localhost:3332/api/schools/'+school._id+'');
    }
    catch(e){
      console.error('Error deleting:', e);
    }
  }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
