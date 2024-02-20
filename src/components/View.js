import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function View() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:4789/student')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  };

  console.log(data);
  
  return (

   <div className='view text-center w-100'>

    <h2 className=''>REGISTERED SUDENTS</h2>
      <table className='align-items-center mt-3 p-5 shadow'>
        <thead>
          <tr>
            <th>No</th>
            <th>Student Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Course Method</th>
            <th>Date</th>
            <th>Country</th>
            <th>Profile</th>
            <th>Documents</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.student_name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.course}</td>
                <td>{item.course_method}</td>
                <td>{item.date}</td>
                <td>{item.country}</td>
                <td>{item.profile}</td>
                <td>{item.documents}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='fw-bolder' colSpan="11"><div class="spinner-border spinner-border-sm me-2 " role="status"></div>Loading</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to="/add"><button>Back</button></Link>
   </div>
  );
}

export default View;
