import express from "express";
import "babel-polyfill";
import cors from "cors";

import authenticated from "./api/middlewares/authenticated";
import routes from "./api/routes";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/admin", authenticated);

routes(app);

app.listen(process.env.PORT).on("listening", () => {
  console.log(`🚀 server running on port: ${process.env.PORT}`);
});

export default app;
