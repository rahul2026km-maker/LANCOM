import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes.js";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/tasks.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

connectDB()

app.use("/api/admin" , adminRoutes)
app.use("/api/auth" , authRoutes)
app.use("/api/task" ,taskRoutes )

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});