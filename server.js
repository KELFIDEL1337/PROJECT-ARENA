const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("🚀 Welcome to Project Arena v0.1!");
});

server.listen(PORT, () => {
  console.log(`Project Arena server is running on port ${PORT}`);
});
