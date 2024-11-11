import "dotenv/config";

import express from "express";
const app = express();
import userRoute from "./routes/userRoutes.js"
import postRote from "./routes/postRoutes.js"
import commentRoute from "./routes/commentRoutes.js"
const PORT = process.env.PORT || 3000;

// * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hi Everyone.");
});

app.use("/api/v1/user",userRoute)
app.use("/api/v1/post",postRote)
app.use("/api/v1/comment",commentRoute)

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));