const express = require("express");
const app = express();
const PORT = 5000;
const connectToDataBase = require("./Database");
const cors = require("cors");
const multer = require('multer');


connectToDataBase();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./router/auth"));
app.use("/course", multer().array() ,require("./router/Course"))

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
