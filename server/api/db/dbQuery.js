import pool from "./pool";

pool.on("connect", () => {
  console.dir("connected to the db");
});

pool.on("remove", () => {
  console.error("client db removed");
});

export default {
  query(quertText, params) {
    return new Promise((resolve, reject) => {
      pool
        .query(quertText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
