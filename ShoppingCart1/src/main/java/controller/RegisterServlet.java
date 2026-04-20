package controller;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;

public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        // NO DATABASE (simple demo)
        res.sendRedirect("login.jsp?registered=1");
    }
}