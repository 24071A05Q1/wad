const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

/* ---------------- LOGIN (TOKEN GENERATION) ---------------- */
app.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: "admin"
    };

    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token });
});

/* ---------------- MIDDLEWARE (VERIFY TOKEN) ---------------- */
function verifyToken(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
        return res.send("Access Denied: No Token Provided");
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.send("Invalid Token");
        }

        req.user = decoded;
        next();
    });
}

/* ---------------- PROTECTED ROUTE ---------------- */
app.get("/dashboard", verifyToken, (req, res) => {
    res.send("Welcome " + req.user.username + " to Dashboard");
});

/* ---------------- SERVER ---------------- */
app.listen(3000, () => {
    console.log("JWT Server running on http://localhost:3000");
});


*/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
/* 
jwt experiment , 

STEP 1: Create Project
mkdir jwt-auth-app
cd jwt-auth-app
npm init -y
📦 STEP 2: Install Dependencies
npm install express jsonwebtoken
📄 STEP 3: Create server.js
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

/* ---------------- LOGIN (TOKEN GENERATION) ---------------- */
app.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: "admin"
    };

    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token });
});

/* ---------------- MIDDLEWARE (VERIFY TOKEN) ---------------- */
function verifyToken(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
        return res.send("Access Denied: No Token Provided");
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.send("Invalid Token");
        }

        req.user = decoded;
        next();
    });
}

/* ---------------- PROTECTED ROUTE ---------------- */
app.get("/dashboard", verifyToken, (req, res) => {
    res.send("Welcome " + req.user.username + " to Dashboard");
});

/* ---------------- SERVER ---------------- */
app.listen(3000, () => {
    console.log("JWT Server running on http://localhost:3000");
});
🚀 STEP 4: Run Server
node server.js
📮 STEP 5: POSTMAN TESTING
🟢 1. LOGIN (GET TOKEN)
🔹 Method:

POST

🔹 URL:
http://localhost:3000/login
🔹 Body:

raw → JSON:

{
  "username": "admin",
  "password": "1234"
}
✅ Output:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}

👉 COPY THIS TOKEN

🔵 2. ACCESS PROTECTED ROUTE
🔹 Method:

GET

🔹 URL:
http://localhost:3000/dashboard
🔹 Step: Add Token in Header

Go to Headers:

Key	Value
Authorization	YOUR_TOKEN_HERE
✅ Output:
Welcome admin to Dashboard  
    
    */   */  */
