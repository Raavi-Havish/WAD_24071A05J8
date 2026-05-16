import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CarPriceServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();


        String carname = request.getParameter("carname");

        double price = Double.parseDouble(
                request.getParameter("price"));

        double tax = Double.parseDouble(
                request.getParameter("tax"));


        double taxAmount = (price * tax) / 100;


        double finalPrice = price + taxAmount;


        out.println("<html>");
        out.println("<body>");

        out.println("<h2>Car Price Details</h2>");

        out.println("<table border='1' cellpadding='10'>");

        out.println("<tr>");
        out.println("<th>Car Name</th>");
        out.println("<td>" + carname + "</td>");
        out.println("</tr>");

        out.println("<tr>");
        out.println("<th>Base Price</th>");
        out.println("<td>" + price + "</td>");
        out.println("</tr>");

        out.println("<tr>");
        out.println("<th>Tax Percentage</th>");
        out.println("<td>" + tax + "%</td>");
        out.println("</tr>");

        out.println("<tr>");
        out.println("<th>Tax Amount</th>");
        out.println("<td>" + taxAmount + "</td>");
        out.println("</tr>");

        out.println("<tr>");
        out.println("<th>Final Price</th>");
        out.println("<td>" + finalPrice + "</td>");
        out.println("</tr>");

        out.println("</table>");

        out.println("</body>");
        out.println("</html>");
    }
}