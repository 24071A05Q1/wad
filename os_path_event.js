const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("start", () => {
    console.log("Server Event Triggered");
});

const server = http.createServer((req, res) => {

    event.emit("start");

    res.writeHead(200, { "Content-Type": "text/plain" });

    res.write("OS: " + os.platform() + "\n");
    res.write("Home: " + os.homedir() + "\n");
    res.write("Path Join: " + path.join(__dirname, "file.txt") + "\n");

    res.end("Server Running");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});


/*  
9. Node.js Custom Server + Modules
🔹 Step 1: Create Project Folder
mkdir node_exp9
cd node_exp9
npm init -y
🔹 Step 2: Create server.js
const http = require("http");
const os = require("os");
const path = require("path");
const EventEmitter = require("events");

const event = new EventEmitter();

event.on("start", () => {
    console.log("Server Event Triggered");
});

const server = http.createServer((req, res) => {

    event.emit("start");

    res.writeHead(200, { "Content-Type": "text/plain" });

    res.write("OS: " + os.platform() + "\n");
    res.write("Home: " + os.homedir() + "\n");
    res.write("Path Join: " + path.join(__dirname, "file.txt") + "\n");

    res.end("Server Running");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
🔹 Step 3: Run Server
node server.js
🔹 Step 4: Open Browser
http://localhost:3000   */
