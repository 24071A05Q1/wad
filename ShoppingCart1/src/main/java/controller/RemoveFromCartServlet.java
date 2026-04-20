package controller;

import java.io.IOException;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import model.CartItem;

public class RemoveFromCartServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        int id = Integer.parseInt(req.getParameter("id"));

        HttpSession session = req.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        if(cart != null){
            cart.removeIf(item -> item.getId() == id);
        }

        res.sendRedirect("cart.jsp");
    }
}