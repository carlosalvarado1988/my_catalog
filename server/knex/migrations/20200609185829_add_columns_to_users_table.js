const tableName = "users";

exports.up = (knex) =>
  knex.schema.alterTable(tableName, (t) => {
    t.string("first_name", 200);
    t.string("last_name", 200);
  });

exports.down = (knex) =>
  knex.schema.alterTable(tableName, (t) => {
    t.dropColumn("first_name");
    t.dropColumn("last_name");
  });
