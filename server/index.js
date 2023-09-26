import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 8000;
connectDB();

const app = express();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: "https://mernbakestreet.web.app",
  methods: 'GET,HEAD,PUT,POST,DELETE',
  credentials: true,
};

import userRoutes from "./routes/userRoutes.js";
import cakeRoutes from "./routes/cakeRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartController from "./controllers/cartController.js";

app.use(express.static(path.join(__dirname, "../app/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/cakes", cakeRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/carts", cartController);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
