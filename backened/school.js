const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const schoolRoutes = require('./routes/schoolRoutes');
const app = express();
app.use(cors());
const PORT = 3332;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/schools', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
