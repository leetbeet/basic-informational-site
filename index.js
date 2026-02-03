import http from "node:http";
import fs from "node:fs";

const displayFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end();
      return;
    }

    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    displayFile("./index.html", res);
  } else if (url === "/about") {
    displayFile("./about.html", res);
  } else if (url === "/contact-me") {
    displayFile("./contact-me.html", res);
  } else {
    res.statusCode = 404;
    displayFile("./404.html", res);
  }
});

server.listen(8080);
