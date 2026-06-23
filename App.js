import React, { useState } from 'react';
import Login from './Login';
import ApplyForm from './ApplyForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Realistic alumni-posted job data
  const jobs = [
    { 
      id: 1, 
      title: 'Python Developer', 
      company: 'TCS', 
      location: 'Hyderabad',
      salary: '₹4.5 - ₹6 LPA',
      postedBy: 'Gayatri Kuna (Batch of 2024)', 
      desc: 'Looking for freshers with strong core Python concepts and SQL knowledge.' 
    },
    { 
      id: 2, 
      title: 'Associate Cloud Engineer', 
      company: 'Google', 
      location: 'Bangalore (Remote)',
      salary: '₹12 - ₹15 LPA',
      postedBy: 'Suresh Kumar (Batch of 2021)', 
      desc: 'Experience with Google Cloud Platform (GCP), IAM, and basic networking concepts.' 
    },
    { 
      id: 3, 
      title: 'Frontend Developer (React)', 
      company: 'Amazon', 
      location: 'Chennai',
      salary: '₹8 - ₹10 LPA',
      postedBy: 'Priya Sharma (Batch of 2022)', 
      desc: 'Strong hold on HTML5, CSS3, JavaScript, and React.js hooks.' 
    }
  ];

  // Realistic Success Feedbacks
  const testimonials = [
    {
      id: 1,
      name: "Anjali Devi",
      role: "Software Engineer at Microsoft",
      batch: "Batch of 2023",
      text: "This portal changed my career! I got a direct referral from my senior for Microsoft. The interview guidelines they shared were priceless."
    },
    {
      id: 2,
      name: "Vikas Reddy",
      role: "Data Analyst at Accenture",
      batch: "Batch of 2024",
      text: "Applying through standard job boards never worked for me. But here, an alumnus reviewed my application personally and took my mock interview!"
    }
  ];

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ padding: '0', margin: '0', fontFamily: "'Segoe UI', Roboto, sans-serif", backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      
      {/* Navigation Header */}
      <header style={{ background: 'linear-gradient(135deg, #0056b3, #003d82)', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h2 style={{ margin: 0, fontSize: '24px', letterSpacing: '0.5px' }}>🎓 Alumni-Student Career Bridge</h2>
        <button onClick={() => setIsLoggedIn(false)} style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          Logout
        </button>
      </header>

      {/* Main Body */}
      <main style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* Welcome Banner */}
        <div style={{ background: 'linear-gradient(135deg, #ffffff, #e6f0ff)', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '30px', textAlign: 'center', border: '1px solid #d0e1ff' }}>
          <h1 style={{ color: '#0056b3', margin: '0 0 10px 0', fontSize: '28px' }}>Welcome to Your Network, Student! 👋</h1>
          <p style={{ color: '#444', fontSize: '16px', margin: '0 0 25px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            Skip the generic HR filters. Connect directly with alumni working at top tech firms, get internal referrals, and accelerate your career.
          </p>
          <input 
            type="text" 
            placeholder="🔍 Search hidden job opportunities (e.g., Python, Amazon, Remote)..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '85%', maxWidth: '600px', padding: '14px 25px', borderRadius: '30px', border: '2px solid #0056b3', fontSize: '16px', outline: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
          />
        </div>

        {/* 🌟 BENEFITS SECTION (NEW FEATURE) */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#222', textAlign: 'center', marginBottom: '20px' }}>Why Use This Portal? 🚀</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>🎯</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#0056b3' }}>Direct Referrals</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Your application goes directly to the alumni instead of getting lost in bulk job portals.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>💡</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#0056b3' }}>Insider Mentorship</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Connect with seniors to understand company culture, round structures, and clear interview tips.</p>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', marginBottom: '10px' }}>🔓</div>
              <h4 style={{ margin: '0 0 10px 0', color: '#0056b3' }}>Hidden Job Market</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Access exclusive early-stage internal openings before they are published anywhere else.</p>
            </div>
          </div>
        </section>

        {/* TWO COLUMN LAYOUT: JOBS & TESTIMONIALS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '30px' }}>
          
          {/* LEFT: JOB FEED */}
          <div>
            <h3 style={{ color: '#333', marginTop: 0, marginBottom: '15px', borderBottom: '2px solid #0056b3', paddingBottom: '5px' }}>
              🔥 Exclusive Alumni Job Feed ({filteredJobs.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div key={job.id} style={{ backgroundColor: 'white', borderLeft: '6px solid #0056b3', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <h3 style={{ color: '#0056b3', margin: 0, fontSize: '18px' }}>{job.title}</h3>
                      <span style={{ background: '#e1ecf4', color: '#0056b3', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>{job.location}</span>
                    </div>
                    <h4 style={{ margin: '0 0 12px 0', color: '#555', fontSize: '15px' }}>🏢 {job.company} • <span style={{ color: '#28a745' }}>{job.salary}</span></h4>
                    <p style={{ color: '#666', fontSize: '13.5px', lineHeight: '1.5', margin: '0 0 15px 0' }}>{job.desc}</p>
                    
                    <div style={{ borderTop: '1px solid #eee', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: '#777' }}>📌 Alumnus: <b>{job.postedBy}</b></span>
                      <button 
                        onClick={() => setSelectedJob(job.title)} 
                        style={{ padding: '8px 16px', background: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
                      >
                        Apply via Referral
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '30px', color: '#888', background: 'white', borderRadius: '8px' }}>
                  No matching jobs found! Try searching for another company.
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: ALUMNI FEEDBACK / SUCCESS STORIES (NEW FEATURE) */}
          <div>
            <h3 style={{ color: '#333', marginTop: 0, marginBottom: '15px', borderBottom: '2px solid #28a745', paddingBottom: '5px' }}>
              💚 Alumni Success Stories
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {testimonials.map((t) => (
                <div key={t.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <p style={{ fontStyle: 'italic', color: '#444', fontSize: '13px', margin: '0 0 10px 0', lineHeight: '1.4' }}>"{t.text}"</p>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 'bold', color: '#28a745', fontSize: '13px' }}>{t.name}</span>
                    <span style={{ fontSize: '11px', color: '#666' }}>{t.role}</span>
                    <span style={{ fontSize: '11px', color: '#999' }}>({t.batch})</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quick Stats Widget */}
            <div style={{ marginTop: '20px', background: 'linear-gradient(135deg, #28a745, #1e7e34)', color: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>Community Impact</h4>
              <h2 style={{ margin: '0 0 5px 0', fontSize: '28px' }}>500+</h2>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>Students referred & placed this year!</p>
            </div>
          </div>

        </div>

        {/* Dynamic Form Placement */}
        {selectedJob && (
          <div style={{ marginTop: '30px' }}>
            <ApplyForm jobTitle={selectedJob} onClose={() => setSelectedJob(null)} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;