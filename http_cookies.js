const http = require("http");

// simple in-memory session store
let sessions = {};

const server = http.createServer((req, res) => {

    // get cookie
    let cookie = req.headers.cookie;
    let sessionId = cookie ? cookie.split("=")[1] : null;

    // ROUTES

    // LOGIN
    if (req.url === "/login") {
        sessionId = Date.now().toString(); // simple session id
        sessions[sessionId] = { user: "Hruday" };

        res.setHeader("Set-Cookie", "sessionId=" + sessionId);
        res.end("Logged in as Hruday");
    }

    // HOME (SESSION CHECK)
    else if (req.url === "/home") {
        if (sessionId && sessions[sessionId]) {
            res.end("Welcome " + sessions[sessionId].user);
        } else {
            res.end("Please login first");
        }
    }

    // LOGOUT
    else if (req.url === "/logout") {
        delete sessions[sessionId];
        res.setHeader("Set-Cookie", "sessionId=; Max-Age=0");
        res.end("Logged out");
    }

    // DEFAULT
    else {
        res.end("Use /login , /home , /logout");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});


/* cd exp8

   node server.js
   
   [save file as server.js under exp8] */
