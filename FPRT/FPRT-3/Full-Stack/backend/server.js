const express = require("express");
const connectDB = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//routes
const signRoutes = require("./routes/signRoutes");
const videoRoutes = require("./routes/videoRoutes");
const authorize = require("./middlewares/auth");

const app = express();

//allow from origins
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

//to parse cookies
app.use(cookieParser());
//to parse req body
app.use(express.json());
//autnorise
app.use(authorize);

app.use(signRoutes);
app.use(videoRoutes);

app.listen(8000, () => {
  console.log("server is up");
  connectDB();
});
