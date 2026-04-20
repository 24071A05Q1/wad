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