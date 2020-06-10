import jwt from "jsonwebtoken";
import { errorMessage, status } from "../helpers/status";

const authenticated = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    errorMessage.error = "Token not provided";
    return res.status(status.bad).send(errorMessage);
  }
  jwt.verify(token, process.env.APP_KEY, (err, decode) => {
    if (err) {
      errorMessage.error = "Authentication Failed";
      res.status(status.unauthorized).send(errorMessage);
    } else {
      return next();
    }
  });
};

export default authenticated;
