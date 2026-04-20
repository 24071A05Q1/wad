package controller;

import java.io.IOException;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import model.CartItem;

public class CartServlet extends HttpServlet {

    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        int id = Integer.parseInt(req.getParameter("id"));
        String name = req.getParameter("name");
        double price = Double.parseDouble(req.getParameter("price"));

        CartItem item = new CartItem(id, name, price);

        HttpSession session = req.getSession();
        List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");

        if(cart == null){
            cart = new ArrayList<>();
        }

        cart.add(item);
        session.setAttribute("cart", cart);

        res.sendRedirect("cart.jsp");
    }
}