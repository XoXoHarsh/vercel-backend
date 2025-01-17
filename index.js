import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! from vercel");
});

app.post("/register", (req, res) => {
  console.log("Request body: ", req.body);
  return res.status(200).json({
    message: "User registered successfully",
    body: req.body,
  });
});

app.listen(PORT, () => {
  console.log("Server is listening on port 3000");
});
