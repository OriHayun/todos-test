import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import TodosRoutes from "./routes/todos.router";
import KeepAliveRoutes from "./routes/keepalive.router";
const cors = require("cors");

const app: express.Application = express();
app.use(json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use("/", KeepAliveRoutes);
app.use("/todos", TodosRoutes);

mongoose.connect("mongodb://localhost:27017/todos").then(() => {
  console.log("Connected to MongoDB");
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
