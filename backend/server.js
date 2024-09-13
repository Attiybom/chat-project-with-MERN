
import express from "express";

import dotenv from "dotenv";

// const dotenv = require('dotenv')
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

// routes
import authRoutes from "./routes/auth.routes.js";


app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});


app.use('/api/v1/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
