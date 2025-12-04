const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONT_PORT,
  })
);

const mongoUri = process.env.MONGO_LOCAL;

mongoose
  .connect(mongoUri)
  .then(() => {
    const dbType = mongoUri === process.env.MONGO_LOCAL ? "LOCAL" : "ATLAS";
    console.log(`MongoDB Connected (${dbType})`);
  })
  .catch((err) => console.error("MongoDB Error:", err));

app.use("/auth", require("./routes/auth"));

app.listen(process.env.BACK_PORT, () =>
  console.log(`Server running on http://localhost:${process.env.BACK_PORT}`)
);
