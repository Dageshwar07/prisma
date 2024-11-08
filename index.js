import "dotenv/config";

import express from "express";
const app = express();
import userRoute from "./routes/userRoutes.js"
const PORT = process.env.PORT || 3000;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hi Everyone.");
});

app.use("/api/v1",userRoute)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));