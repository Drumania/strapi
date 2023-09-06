module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "secret"),
      keys: [
        "djjnhvEa1r9giP1URfp/bw==,ORl0aceuv8w6RZ2ExZlhXA==,JVTNvcomceaDAbV0cj8Tgw==,+C8onLL+g7rCsRdSc4epYg==",
      ], // Agrega tus claves de aplicación aquí
    },
  },
});
