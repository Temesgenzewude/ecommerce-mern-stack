import express from "express";
import env from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";

import authRoutes from "./src/routes/auth/auth_route.js";

import adminRoutes from "./src/routes/admin/auth_route.js";

import categoryRoutes from "./src/routes/category/category.js";

import productRoutes from "./src/routes/product/product_route.js";

import cartRoutes from "./src/routes/cart/cart_route.js";

import initialDataRoutes from "./src/routes/admin/initialData.js";

// environment variables
env.config();

// mongodb connection url
const CONNECTION_URL = "mongodb://localhost:27017/mernecommerce";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());

app.use("/public", express.static(path.join("./src/", "uploads")));

app.use("/api", authRoutes);

app.use("/api", adminRoutes);

app.use("/api", categoryRoutes);

app.use("/api", productRoutes);

app.use("/api", cartRoutes);

app.use("/api", initialDataRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


// *****TO SETUP PATH FOR MONGODB use the following command ********//
//       mongod --dbpath=data --bind_ip 127.0.0.1      //where data is the place for data to be stored in our machine
