const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./database/db");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//route paths
// app.use("/api/products", require("./routes/productRoutes"));

// Call the connectDB function to connect to the database
connectDB();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    limit: "100mb",
    extended: false,
  })
);
app.use(cors());
app.use(express.json());

app.get("/get", (req, res) => {
  res.send("E-commerce Server");
});

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

//Routes middleware

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
