import express from "express";

import hoardsRouter from "./routes/hoards.js";

const app = express();

app.use(express.json());

app.use("/hoards", hoardsRouter);

export default app;

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
