import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post(
      "https://659c2ef8d565feee2dac9ab5.mockapi.io/crud/react/create-data",
      { name: name, email: email }
    ).then(() => {
      history("/read");
    });
  };

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between mb-4'>
        <h1>Create Page</h1>
        <Link to={'/read'}>
          <button className='btn btn-primary'>Show Data</button>
        </Link>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
