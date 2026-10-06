// src/components/RegistrationForm.jsx
import { useState } from 'react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'developer',
  });
// console.log(formData)
// console.log(setFormData)
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Generic handler for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (!formData.username || !formData.email) {
      setError('All fields are required.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '350px' }}>
      <h2>Register Account</h2>
      {submitted ? (
        <div style={{ color: 'green' }}>
          Account created for {formData.username} ({formData.role})!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div style={{ marginBottom: '10px' }}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ width: '100%', padding: '6px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '6px' }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{ width: '100%', padding: '6px' }}
            >
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <button type="submit" style={{ width: '100%', padding: '8px' }}>
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}