import express from "express"
import { getData, getFixedData } from "./services/data";
import cors from "cors"

const app = express();

app.use(cors({origin: true}));

app.get("/api/data", async (_req, res, _next) => {
  try {
    const data = await getData();
    res.status(200).send(data);
  } catch (error) {
    console.error("Error getting data", error);
    res.status(500).send("Internal server error");
  }
});

export default app;
