import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  //  (GET Request)
  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'left', color: '#333', marginBottom: '20px' }}>Available Job Opportunities 💼</h2>
      
      {jobs.length === 0 ? (
        <p style={{ textAlign: 'left', color: '#666' }}>No jobs posted yet.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {jobs.map((job) => (
            <div key={job._id} style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              textAlign: 'left',
              borderLeft: '5px solid #007bff'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#007bff' }}>{job.title}</h3>
              <h5 style={{ margin: '0 0 10px 0', color: '#555' }}>🏢 {job.company}</h5>
              <p style={{ fontSize: '14px', color: '#777', margin: '0 0 10px 0' }}><strong>Posted by:</strong> {job.postedBy}</p>
              <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.4' }}>{job.description}</p>
              {job.link && (
                <a href={job.link} target="_blank" rel="noreferrer" style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}>Apply Now</a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;