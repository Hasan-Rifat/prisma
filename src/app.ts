import express, { Application } from "express";
import cors from "cors";
import { UserRoute } from "./modules/user/user.router";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoute);

export default app;
