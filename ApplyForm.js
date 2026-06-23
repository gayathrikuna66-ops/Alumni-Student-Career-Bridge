import React, { useState } from 'react';

const ApplyForm = ({ jobTitle, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', collegeId: '', skills: '', resumeLink: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`సక్సెస్ రా! ${jobTitle} పొజిషన్ కి నీ అప్లికేషన్ సబ్మిట్ అయిపోయింది! 🚀`);
    onClose();
  };

  return (
    <div style={{ background: '#f9f9f9', padding: '25px', borderRadius: '8px', border: '2px solid #0056b3', marginTop: '20px' }}>
      <h3 style={{ color: '#0056b3', marginTop: 0 }}>Apply for: {jobTitle} 💼</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" name="collegeId" placeholder="College Roll Number / ID" value={formData.collegeId} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" name="skills" placeholder="Key Skills (e.g. Python, React)" value={formData.skills} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="url" name="resumeLink" placeholder="Drive Resume Link" value={formData.resumeLink} onChange={handleChange} required style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ flex: 1, padding: '10px', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Submit Application</button>
          <button type="button" onClick={onClose} style={{ padding: '10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;