import express from "express";
import NewRoute from "./routes/route.js";

const app = express();
app.use(express.json());
app.use("/", NewRoute);

app.listen(3333, () => console.log("lisiting"));
