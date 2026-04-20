package controller;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String email = req.getParameter("email");
        String password = req.getParameter("password");

        // SIMPLE LOGIN (hardcoded)
        if(email.equals("admin@gmail.com") && password.equals("1234")) {

            HttpSession session = req.getSession();
            session.setAttribute("user", email);

            res.sendRedirect("catalog.jsp");

        } else {
            res.sendRedirect("login.jsp?error=1");
        }
    }
}