module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-85.railway.app"),
      port: env.int("PGPORT", 6180),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "ZBLXZto2UjXIwG5nJysy"),
      ssl: env.bool(true),
    },
    pool: { min: 0 },
  },
});
