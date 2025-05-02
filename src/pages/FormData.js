
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormData = () => {
  const [formData, setFormData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/form-data');
      setFormData(response.data);
      calculateTotal(response.data);
    } catch (error) {
      console.error('Error fetching form data:', error);
    }
  };

  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.amount;
    });
    setTotalAmount(total);
  };

  return (
    <div className="FormDataPage">
      <h1>Form Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Amount: {totalAmount}</p>
    </div>
  );
};

export default FormData;
