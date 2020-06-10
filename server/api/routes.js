import authController from "./controllers/authController";
import clientController from "./controllers/clientController";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send(`Api server in running (${new Date()})`);
  });

  app.route("/login").post(authController.login);
  app.route("/register").post(authController.register);

  app.route("/api/v1/clients").get(clientController.getClients);
  // .post(clientController.create);
};

export default routes;
