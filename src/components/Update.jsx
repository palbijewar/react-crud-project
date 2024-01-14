import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Update() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const history = useNavigate();

  const handleFormUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://659c2ef8d565feee2dac9ab5.mockapi.io/crud/react/create-data/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        history('/read');
      });
  };

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Update Page</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-info" onClick={handleFormUpdate}>
          Update
        </button>
        <Link to="/read">
          <button type="button" className="btn btn-secondary ms-2">
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}
