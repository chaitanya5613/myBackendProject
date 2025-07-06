import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });
console.log("🔍 Loaded MONGODB_URL:", process.env.MONGODB_URL);

const app = express();
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err);
  });
