const express = require("express");
const app = express();
// postman  


/*cmd prmt:mkdir exp10
cd exp10
npm init -y
npm install express*/

/*cmd prmt: node app.js*/
/*all in app.js*/
app.use(express.json());

// In-memory database (array)
let students = [];

/* ---------------- CREATE ---------------- */
app.post("/students", (req, res) => {
    const student = req.body;
    students.push(student);
    res.send("Student added successfully");
});
app.get("/", (req, res) => {
    res.send("Student CRUD API is running");
});
/* ---------------- READ ALL ---------------- */
app.get("/students", (req, res) => {
    res.json(students);
});

/* ---------------- READ ONE ---------------- */
app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    res.json(students[id]);
});

/* ---------------- UPDATE ---------------- */
app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    students[id] = req.body;
    res.send("Student updated successfully");
});

/* ---------------- DELETE ---------------- */
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    students.splice(id, 1);
    res.send("Student deleted successfully");
});

/* ---------------- SERVER ---------------- */
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
