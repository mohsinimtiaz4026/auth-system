require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();

// database connectivity
require("./config");

// middlewares
app.use(cors());
app.use(express.json());

// set view engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

// routes
app.use("/api/v1",require("./routers"));

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Listening port on ${PORT}`));