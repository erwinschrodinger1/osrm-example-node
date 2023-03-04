import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import OSRM from "@project-osrm/osrm";
export const app: Express = express();

const pathS = path.join(__dirname, "../public/osrmData/berlin-latest");

const osrm = new OSRM(pathS);

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, there", path: pathS });
  try {
    osrm.route(
      {
        coordinates: [
          [13.43864, 52.51993],
          [13.415852, 52.513191],
        ],
      },
      function (err, result) {
        if (err) {
          return console.log("Error is: " + err);
        }
        console.log(result.waypoints); // array o f Waypoint objects representing all waypoints in order
        console.log(result.routes); // array of Route objects ordered by descending recommendation rank
      }
    );
  } catch (e) {
    console.log(e);
  }
});
