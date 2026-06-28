import React, { useState } from 'react';

export default function App() {
  // Navigation States: 'login', 'dashboard', 'jobs', 'apply_form', 'applications', 'mentors'
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedJob, setSelectedJob] = useState(null);

  // Sample Data matching the exact text in ChatGPT Image Jun 28, 2026, 07_41_20 PM.png
  const stats = [
    { label: "Alumni Mentors", value: "120+", color: "#4f46e5" },
    { label: "Jobs Available", value: "58", color: "#2563eb" },
    { label: "Applications", value: "12", color: "#16a34a" },
    { label: "Events", value: "8", color: "#ea580c" }
  ];

  const recentOpportunities = [
    { title: "Software Developer at Infosys", type: "Full Time", date: "20 May 2024" },
    { title: "Web Developer Intern at TCS", type: "Internship", date: "18 May 2024" },
    { title: "Data Analyst at Wipro", type: "Full Time", date: "15 May 2024" }
  ];

  const jobsList = [
    { id: 1, title: "Software Developer", company: "Infosys Limited", type: "Full Time", location: "Bangalore", package: "₹ 6.50 LPA", logo: "I" },
    { id: 2, title: "System Engineer", company: "Tata Consultancy Services", type: "Full Time", location: "Hyderabad", package: "₹ 4.20 LPA", logo: "T" },
    { id: 3, title: "Data Analyst", company: "Wipro Limited", type: "Full Time", location: "Bangalore", package: "₹ 5.00 LPA", logo: "W" },
    { id: 4, title: "Associate Software Engineer", company: "Accenture", type: "Full Time", location: "Pune", package: "₹ 4.50 LPA", logo: "A" }
  ];

  const trackingApplications = [
    { title: "Software Developer", company: "Infosys", date: "20 May 2024", status: "Under Review", color: "#eab308" },
    { title: "System Engineer", company: "TCS", date: "18 May 2024", status: "Shortlisted", color: "#22c55e" },
    { title: "Data Analyst", company: "Wipro", date: "15 May 2024", status: "Interview Scheduled", color: "#3b82f6" },
    { title: "Web Developer Intern", company: "TCS", date: "10 May 2024", status: "Applied", color: "#64748b" },
    { title: "Associate Software Engineer", company: "Accenture", date: "05 May 2024", status: "Rejected", color: "#ef4444" }
  ];

  const mentorsList = [
    { name: "Rahul Sharma", role: "Software Engineer at Google", exp: "10+ Years Experience" },
    { name: "Priya Verma", role: "Product Manager at Microsoft", exp: "8+ Years Experience" },
    { name: "Ankit Patel", role: "Data Scientist at Amazon", exp: "7+ Years Experience" },
    { name: "Sneha Reddy", role: "HR Manager at Infosys", exp: "6+ Years Experience" },
    { name: "Vikram Singh", role: "Backend Developer at TCS", exp: "9+ Years Experience" },
    { name: "Neha Gupta", role: "UI/UX Designer at Wipro", exp: "6+ Years Experience" }
  ];

  // Action Helpers
  const triggerApply = (job) => {
    setSelectedJob(job);
    setCurrentPage('apply_form');
  };

  const submitApplicationForm = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setCurrentPage('applications');
  };

  /* ==================== 1. LOGIN PAGE VIEW ==================== */
  if (currentPage === 'login') {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
        <div style={{ flex: 1, background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', padding: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎓</div>
          <h1 style={{ fontSize: '36px', margin: '0 0 10px 0', fontWeight: 'bold' }}>Alumni Student<br/>Career Bridge</h1>
          <p style={{ color: '#bfdbfe', maxWidth: '300px' }}>Connecting Students with Alumni for a Better Tomorrow</p>
        </div>
        <div style={{ flex: 1.2, background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
          <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' }}>
            <h2 style={{ color: '#1e293b', margin: '0 0 5px 0' }}>Welcome Back!</h2>
            <p style={{ color: '#64748b', margin: '0 0 25px 0', fontSize: '14px' }}>Login to continue your journey</p>
            <form onSubmit={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontSize: '14px' }}>Email Address</label>
              <input type="email" placeholder="name@example.com" style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} required />
              <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontSize: '14px' }}>Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} required />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', fontSize: '13px' }}>
                <label style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' }}><input type="checkbox" /> Remember Me</label>
                <a href="#forgot" style={{ color: '#2563eb', textDecoration: 'none' }}>Forgot Password?</a>
              </div>
              <button type="submit" style={{ width: '100%', padding: '14px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  /* ==================== MAIN DASHBOARD LAYOUT WRAPPER ==================== */
  const renderSidebar = () => (
    <div style={{ width: '260px', background: '#0f172a', color: '#94a3b8', display: 'flex', flexDirection: 'column', padding: '20px 0' }}>
      <div style={{ padding: '0 20px 20px 20px', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '24px' }}>🎓</span>
        <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>Alumni Student<br/><span style={{ fontSize: '12px', color: '#38bdf8' }}>Career Bridge</span></span>
      </div>
      <div style={{ flex: 1, marginTop: '20px' }}>
        {[
          { id: 'dashboard', label: 'Dashboard', icon: '📊' },
          { id: 'mentors', label: 'Alumni Mentors', icon: '👥' },
          { id: 'jobs', label: 'Jobs & Internships', icon: '💼' },
          { id: 'applications', label: 'Applications', icon: '📝' },
        ].map((item) => (
          <div key={item.id} onClick={() => setCurrentPage(item.id)} style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', background: currentPage === item.id ? '#1e293b' : 'transparent', color: currentPage === item.id ? '#38bdf8' : '#94a3b8', borderLeft: currentPage === item.id ? '4px solid #38bdf8' : 'none' }}>
            <span>{item.icon}</span>{item.label}
          </div>
        ))}
      </div>
      <div onClick={() => setCurrentPage('login')} style={{ padding: '15px 24px', borderTop: '1px solid #1e293b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', color: '#f87171' }}>
        <span>🚪</span> Logout
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', fontFamily: 'Segoe UI, sans-serif' }}>
      {renderSidebar()}

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* TOP BAR */}
        <header style={{ background: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontWeight: '600', color: '#334155' }}>Gayatri Kuna</span>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#cbd5e1', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>G</div>
          </div>
        </header>

        {/* INNER DYNAMIC PAGE CONTAINER */}
        <main style={{ padding: '30px', flex: 1 }}>
          
          {/* ==================== 2. STUDENT DASHBOARD ==================== */}
          {currentPage === 'dashboard' && (
            <div>
              <h2 style={{ color: '#1e293b', margin: '0 0 5px 0' }}>Welcome, Student! 🎓</h2>
              <p style={{ color: '#64748b', margin: '0 0 25px 0' }}>Explore opportunities and build your career with alumni guidance.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
                {stats.map((stat, idx) => (
                  <div key={idx} style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ color: '#64748b', fontSize: '14px', fontWeight: '500' }}>{stat.label}</div>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: stat.color, marginTop: '5px' }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <h3 style={{ color: '#1e293b', margin: '0 0 20px 0' }}>Recent Opportunities</h3>
                {recentOpportunities.map((op, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: idx !== recentOpportunities.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '20px' }}>💼</span>
                      <div>
                        <div style={{ fontWeight: '600', color: '#334155' }}>{op.title}</div>
                        <span style={{ fontSize: '12px', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '12px', marginTop: '4px', display: 'inline-block' }}>{op.type}</span>
                      </div>
                    </div>
                    <span style={{ color: '#94a3b8', fontSize: '14px' }}>{op.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== 3. JOBS / COMPANIES LIST ==================== */}
          {currentPage === 'jobs' && (
            <div>
              <h2 style={{ color: '#1e293b', margin: '0 0 5px 0' }}>Jobs & Internships</h2>
              <p style={{ color: '#64748b', margin: '0 0 25px 0' }}>Explore jobs and internships posted by top companies.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                {jobsList.map((job) => (
                  <div key={job.id} style={{ background: '#fff', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ width: '50px', height: '50px', background: '#eff6ff', color: '#2563eb', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '20px' }}>{job.logo}</div>
                      <div>
                        <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{job.title}</h4>
                        <div style={{ color: '#64748b', fontSize: '14px' }}>{job.company} • <span style={{ color: '#0f766e' }}>{job.type}</span> • {job.location}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>{job.package}</div>
                      <button onClick={() => triggerApply(job)} style={{ background: '#4f46e5', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '500', cursor: 'pointer' }}>View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================== 4. STUDENT APPLICATION FORM ==================== */}
          {currentPage === 'apply_form' && selectedJob && (
            <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <div style={{ background: '#4f46e5', color: '#fff', padding: '20px 30px' }}>
                <h3 style={{ margin: 0 }}>Apply for: {selectedJob.title} - {selectedJob.company}</h3>
                <p style={{ margin: '5px 0 0 0', color: '#e0e7ff', fontSize: '14px' }}>Fill in your details to apply for this job.</p>
              </div>
              <form onSubmit={submitApplicationForm} style={{ padding: '30px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#334155', fontWeight: '500' }}>Full Name</label>
                    <input type="text" placeholder="Enter your full name" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#334155', fontWeight: '500' }}>Email</label>
                    <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} required />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#334155', fontWeight: '500' }}>Phone Number</label>
                    <input type="text" placeholder="Enter your phone number" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#334155', fontWeight: '500' }}>College / University</label>
                    <input type="text" placeholder="Enter your college name" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }} required />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '30px' }}>
                  <button type="button" onClick={() => setCurrentPage('jobs')} style={{ padding: '10px 20px', background: '#e2e8f0', color: '#334155', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                  <button type="submit" style={{ padding: '10px 20px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Submit Application</button>
                </div>
              </form>
            </div>
          )}

          {/* ==================== 5. MY APPLICATIONS (TRACK STATUS) ==================== */}
          {currentPage === 'applications' && (
            <div style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: '#1e293b', margin: '0 0 5px 0' }}>My Applications</h2>
              <p style={{ color: '#64748b', margin: '0 0 25px 0' }}>Track the status of your job applications.</p>

              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b', fontSize: '14px' }}>
                    <th style={{ padding: '12px' }}>Job Title</th>
                    <th style={{ padding: '12px' }}>Company</th>
                    <th style={{ padding: '12px' }}>Applied Date</th>
                    <th style={{ padding: '12px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingApplications.map((app, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155' }}>
                      <td style={{ padding: '14px', fontWeight: '500' }}>{app.title}</td>
                      <td style={{ padding: '14px' }}>{app.company}</td>
                      <td style={{ padding: '14px', color: '#64748b' }}>{app.date}</td>
                      <td style={{ padding: '14px' }}>
                        <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', background: `${app.color}20`, color: app.color }}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ==================== 6. ALUMNI MENTORS PAGE ==================== */}
          {currentPage === 'mentors' && (
            <div>
              <h2 style={{ color: '#1e293b', margin: '0 0 5px 0' }}>Our Alumni Mentors</h2>
              <p style={{ color: '#64748b', margin: '0 0 25px 0' }}>Connect with experienced alumni and get guidance.</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
                {mentorsList.map((mentor, idx) => (
                  <div key={idx} style={{ background: '#fff', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#f1f5f9', margin: '0 auto 15px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '28px' }}>👤</div>
                    <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{mentor.name}</h4>
                    <p style={{ margin: '0 0 5px 0', color: '#4f46e5', fontSize: '14px', fontWeight: '500' }}>{mentor.role}</p>
                    <p style={{ margin: '0 0 20px 0', color: '#94a3b8', fontSize: '12px' }}>{mentor.exp}</p>
                    <button onClick={() => alert(`Connecting with ${mentor.name}...`)} style={{ width: '100%', background: '#4f46e5', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Connect via LinkedIn</button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
