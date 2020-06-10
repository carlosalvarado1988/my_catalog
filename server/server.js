import express from "express";
import "babel-polyfill";
import cors from "cors";

import authenticated from "./api/middlewares/authenticated";
import routes from "./api/routes";

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/admin", authenticated);

routes(app);

app.listen(port).on("listening", () => {
  console.log(`🚀 server running on port: ${port}`);
});

export default app;
