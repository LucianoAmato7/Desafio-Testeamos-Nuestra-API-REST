import http from "http"
import fs from "fs"

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts",
  port: 80,
  method: "GET",
}

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  const writeStream = fs.createWriteStream("./postHttp.json")

  res.on('data', data => {
    process.stdout.write(data);
    writeStream.write(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        writeStream.end()
      }
    });
  });
});

req.on('error', error => {
  console.log(error);
});

req.end();