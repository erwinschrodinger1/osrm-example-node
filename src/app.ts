import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const app: Express = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, there" });
});
