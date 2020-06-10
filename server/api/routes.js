import authController from "./controllers/authController";
import clientController from "./controllers/clientController";

const routes = (app) => {
  app.get("/api/v1/", (req, res) => {
    res.send(`Api server in running (${new Date()})`);
  });

  app.route("/api/v1/login").post(authController.login);
  app.route("/api/v1/register").post(authController.register);

  app.route("/api/v1/clients").get(clientController.getClients);
  // .post(clientController.create);
};

export default routes;
