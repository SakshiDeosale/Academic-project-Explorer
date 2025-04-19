const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const guideRoutes = require('./routes/guideRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.use('/api/guide', guideRoutes);
// ✅ Error handler goes last
app.use(errorHandler);
module.exports = app;
