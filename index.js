import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! from vercel");
});

app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});
