// HTTP Module
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to Our Page");
  }
  if (request.url === "/about") {
    response.end("Her is our Short History");
  }

  response.end(`<h1>Oops</h1>`);

  // console.log(request);
  // response.write("Welcome to our Home Page");
  // response.end;
});

server.listen(5000); //the port that it listens
