<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

<form class="form-box" action="<%=request.getContextPath()%>/login" method="post">
<h2>Login</h2>

<%
if(request.getParameter("error") != null){
%>
<div style="background:#e74c3c;color:white;padding:12px;margin-bottom:15px;border-radius:6px;text-align:center;font-weight:600;">
Invalid Email or Password!
</div>
<% } %>

<%
if(request.getParameter("registered") != null){
%>
<div style="background:#2ecc71;color:white;padding:12px;margin-bottom:15px;border-radius:6px;text-align:center;font-weight:600;">
Registration successful! Please login.
</div>
<% } %>

<%
if(request.getParameter("logout") != null){
%>
<div style="background:#3498db;color:white;padding:12px;margin-bottom:15px;border-radius:6px;text-align:center;font-weight:600;">
Logged out successfully!
</div>
<% } %>

<input type="email" name="email" placeholder="Enter Email" required>
<input type="password" name="password" placeholder="Enter Password" required>

<button type="submit">Login</button>

<p>Don't have an account? <a href="register.jsp">Register</a></p>

</form>
</div>

</body>
</html>