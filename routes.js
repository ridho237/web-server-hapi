const routes = [
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Home Page";
    },
  },
  {
    // Penggunaan Path Parameter menggunakan params
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name } = request.params;
      return `Hello, ${name}!`;
    },
  },
  {
    // Pengunaan Query Paramater
    method: "GET",
    path: "/sapa/{names?}",
    handler: (request, h) => {
      const { names } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${names}!`;
      }
      if (lang === "jp") {
        return `Konichiwa, ${names}!`;
      }

      return `Hello, ${names}!`;
    },
  },
  {
    // Penggunaan Response
    method: "POST",
    path: "/about",
    handler: (request, h) => {
      const response = h.response("created").code(201);
      response.type("text/html");
      response.header("X-Custom", "some-value");
      return response;
    },
  },
  {
    // Penggunaan Payload Parameter
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}!`;
    },
  },
];

module.exports = routes;
