import dbQuery from "../db/dbQuery";
import { errorMessage, successMessage, status } from "../helpers/status";
import { generateUserToken } from "../helpers/validations";

const clientController = {
  getClients: async (req, res) => {
    const getClientsQuery = `SELECT * FROM clients`;
    try {
      const { rows } = await dbQuery.query(getClientsQuery, []);
      console.log("rows: ", rows);
      const dbResponse = rows[0];
      console.log("dbResponse: ", dbResponse);
      const token = generateUserToken(
        "test@test.com",
        "id",
        "is_admin",
        "first_name",
        "last_name"
      );
      console.log("token: ", token);
      successMessage.data = dbResponse;
      successMessage.token = token;
      return res.status(status.created).send(successMessage);
    } catch (error) {
      console.log("error: ? ", error);
      errorMessage.error = error;
      return res.status(status.error).send(errorMessage);
    }
  },
};

export default clientController;
