const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  //Setting port and host for server
  const server = Hapi.server({
    port: "5000",
    host: "localhost",
  });

  //Request & Response menggunakan fungsi Routes yang diimport pada file routes.js
  server.route(routes);

  //Starting server using await
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
