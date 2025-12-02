// ...existing code...
import React, { useEffect, useState } from 'react';  
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(result => {
        setStudents(result.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Mobile</th> 
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.mobile}</td>
            </tr>
          ))}
        </tbody>  
      </table>

      {students.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>
          <p>{student.id}</p>
          <p>Mobile: {student.mobile}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
// ...existing code...