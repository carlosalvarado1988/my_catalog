## Migrations

To create new migration file use following command:
knex migrate:make migration_file_nameMigration

Run migration using following command :
knex migrate:latest
knex migrate:latest --env production

Rollback migration using following command :
knex migrate:rollback
knex migrate:rollback --env production

NOTE: Make sure Migrations run in staging/production
