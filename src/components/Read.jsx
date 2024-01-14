import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");

  const setToLocalStorageeachData = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const handleDelete = (id) => {
    axios.delete(`https://659c2ef8d565feee2dac9ab5.mockapi.io/crud/react/create-data/${id}`).then(() => {
      getData();
    });
  };

  const getData = () => {
    axios.get("https://659c2ef8d565feee2dac9ab5.mockapi.io/crud/react/create-data").then((res) => {
      setData(res.data);
    }).catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            setTableDark((prevTableDark) => prevTableDark ? '' : 'table-dark');
          }}
        />
        <label className="form-check-label">Dark Mode</label>
      </div>

      <div className='d-flex justify-content-between mb-4'>
        <h1>Read Page</h1>
        <Link to='/'>
          <button className='btn btn-secondary'>Create Data</button>
        </Link>
      </div>

      <table className={`table ${tableDark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((eachData) => (
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => setToLocalStorageeachData(eachData.id, eachData.name, eachData.email)}
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
