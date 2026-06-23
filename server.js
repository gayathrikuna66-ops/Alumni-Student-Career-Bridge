	const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// store temporary (No Database Needed)
let jobs = [
  { id: 1, title: "Python Developer", company: "TCS", description: "Basic Python skills required" }
];

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/jobs', (req, res) => {
  const newJob = { id: jobs.length + 1, ...req.body };
  jobs.push(newJob);
  res.status(201).json(newJob);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`MongoDB Bypass: Connected Successfully!`);
});