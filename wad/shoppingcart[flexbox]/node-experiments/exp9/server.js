const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("start", () => {
  console.log("Server Started Event Triggered");
});

const server = http.createServer((req, res) => {
  event.emit("start");

  res.writeHead(200, { "Content-Type": "text/plain" });

  res.write("OS Info: " + os.platform() + "\n");
  res.write("Home Dir: " + os.homedir() + "\n");
  res.write("File Path: " + path.join(__dirname, "test.txt") + "\n");

  res.end("\nCustom Node Server Running");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});