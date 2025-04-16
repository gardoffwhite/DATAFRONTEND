import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [charName, setCharName] = useState('');
  const [level, setLevel] = useState('');
  const [exp, setExp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/update-character`, {
        charname: charName,
        level,
        exp,
      });
      setMessage('Character updated successfully!');
    } catch (error) {
      setMessage('Failed to update character.');
    }
  };

  return (
    <div>
      <h2>Update Character</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Character Name:</label>
          <input
            type="text"
            value={charName}
            onChange={(e) => setCharName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Level:</label>
          <input
            type="number"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          />
        </div>
        <div>
          <label>EXP:</label>
          <input
            type="number"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Character</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default Form;
