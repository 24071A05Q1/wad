import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Login Component
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={() => alert("Logged in as " + email)}>Login</button>
    </div>
  );
}

// Register Component
function Register() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <input placeholder="Email" />
      <br /><br />
      <input type="password" placeholder="Password" />
      <br /><br />
      <button onClick={() => alert("Registered " + name)}>Register</button>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: student@college.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is a Student Management System using React Routing.</p>
    </div>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Student Management System</h1>

        {/* Navigation */}
        <nav>
          <Link to="/">Login</Link> |{" "}
          <Link to="/register">Register</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}



/*
✅ 1. Install (if not done)
npx create-react-app student-app
cd student-app
npm install react-router-dom
npm start
✅ 2. Replace src/App.js with this
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Login Component
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={() => alert("Logged in as " + email)}>Login</button>
    </div>
  );
}

// Register Component
function Register() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <input placeholder="Email" />
      <br /><br />
      <input type="password" placeholder="Password" />
      <br /><br />
      <button onClick={() => alert("Registered " + name)}>Register</button>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: student@college.com</p>
      <p>Phone: 9876543210</p>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is a Student Management System using React Routing.</p>
    </div>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Student Management System</h1>

        {/* Navigation */}
        <nav>
          <Link to="/">Login</Link> |{" "}
          <Link to="/register">Register</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/about">About</Link>
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
▶️ Run
npm start
🎯 Output
Login page (default)
Register page
Contact page
About page
Navigation using links (no page reload)

*/
export default App;
