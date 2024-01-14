import express from "express";
import { NextFunction, Request, Response } from "express";

const keepAliveRouter: express.Router = express.Router();

keepAliveRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("Server is alive");
});

export default keepAliveRouter;
