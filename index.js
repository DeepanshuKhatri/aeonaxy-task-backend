const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user_routes");
require("dotenv").config()

const app = express();
app.use(cors());
const PORT = process.env.PORT ;
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, async () => {
  console.log(`Server started at port: ${PORT}`);
});
