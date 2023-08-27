const Hapi = require("@hapi/hapi");
const routes = require("./routes");

(async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  server.route(routes);

  await server.start();
  console.log("Server berjalan pada %s", server.info.uri);
})();
