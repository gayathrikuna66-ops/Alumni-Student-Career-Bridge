import React, { useState } from 'react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    postedBy: '',
    description: '',
    link: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //  (POST Request)
    fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => {
      alert(`Job Posted Successfully for ${formData.title}!`);
      setFormData({ title: '', company: '', postedBy: '', description: '', link: '' });
    })
    .catch(err => {
      console.error("Error posting job:", err);
      alert("Failed to post job. Check backend server.");
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#007bff', marginBottom: '20px', textAlign: 'center' }}>Post a New Job Opportunity 📢</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Job Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="e.g. Web Developer" />
        </div>

        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Company Name:</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="e.g. Wipro" />
        </div>

        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Your Name & Batch (Alumni):</label>
          <input type="text" name="postedBy" value={formData.postedBy} onChange={handleChange} required style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="e.g. Kiran Kumar (Batch 2023)" />
        </div>

        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Job Description / Requirements:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="Describe the role and skills needed..."></textarea>
        </div>

        <div>
          <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Application Link / Email:</label>
          <input type="url" name="link" value={formData.link} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} placeholder="https://example.com/careers" />
        </div>

        <button type="submit" style={{ padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px' }}>Submit Job</button>
      </form>
    </div>
  );
};

export default PostJob;