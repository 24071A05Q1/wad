package project1;

import java.sql.*;
import java.util.Scanner;

public class jdbc {

    static final String SERVER_URL = "jdbc:mysql://localhost:3306/";
    static final String DB_NAME = "cruddb";
    static final String USER = "root";
    static final String PASSWORD = "Hruday@123";

    public static void main(String[] args) {

        try {
            // 1️⃣ Connect to MySQL server
            Connection serverCon = DriverManager.getConnection(SERVER_URL, USER, PASSWORD);
            Statement stmt = serverCon.createStatement();

            // 2️⃣ Create database
            stmt.executeUpdate("CREATE DATABASE IF NOT EXISTS " + DB_NAME);
            System.out.println("Database ready ✅");

            // 3️⃣ Connect to the database
            Connection con = DriverManager.getConnection(
                    SERVER_URL + DB_NAME, USER, PASSWORD
            );

            // 4️⃣ Create table
            stmt = con.createStatement();
            stmt.executeUpdate("""
                CREATE TABLE IF NOT EXISTS student (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    name VARCHAR(50),
                    age INT
                )
            """);

            Scanner sc = new Scanner(System.in);

            // 5️⃣ CRUD Menu
            while (true) {
                System.out.println("\n--- MENU ---");
                System.out.println("1. Insert");
                System.out.println("2. View");
                System.out.println("3. Update");
                System.out.println("4. Delete");
                System.out.println("5. Exit");
                System.out.print("Choice: ");

                int choice = sc.nextInt();

                switch (choice) {
                    case 1 -> insert(con, sc);
                    case 2 -> view(con);
                    case 3 -> update(con, sc);
                    case 4 -> delete(con, sc);
                    case 5 -> {
                        System.out.println("Exited 👋");
                        con.close();
                        serverCon.close();
                        return;
                    }
                    default -> System.out.println("Invalid choice ❌");
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // CREATE
    static void insert(Connection con, Scanner sc) throws Exception {
        System.out.print("Enter name: ");
        sc.nextLine();
        String name = sc.nextLine();

        System.out.print("Enter age: ");
        int age = sc.nextInt();

        PreparedStatement ps =
                con.prepareStatement("INSERT INTO student(name, age) VALUES (?, ?)");
        ps.setString(1, name);
        ps.setInt(2, age);
        ps.executeUpdate();

        System.out.println("Inserted ✅");
    }

    // READ
    static void view(Connection con) throws Exception {
        ResultSet rs = con.createStatement()
                .executeQuery("SELECT * FROM student");

        System.out.println("\nID  NAME  AGE");
        while (rs.next()) {
            System.out.println(
                    rs.getInt("id") + "   " +
                    rs.getString("name") + "   " +
                    rs.getInt("age")
            );
        }
    }

    // UPDATE
    static void update(Connection con, Scanner sc) throws Exception {
        System.out.print("Enter ID: ");
        int id = sc.nextInt();

        System.out.print("New age: ");
        int age = sc.nextInt();

        PreparedStatement ps =
                con.prepareStatement("UPDATE student SET age=? WHERE id=?");
        ps.setInt(1, age);
        ps.setInt(2, id);

        System.out.println(ps.executeUpdate() > 0 ? "Updated ✅" : "Not found ❌");
    }

    // DELETE
    static void delete(Connection con, Scanner sc) throws Exception {
        System.out.print("Enter ID: ");
        int id = sc.nextInt();

        PreparedStatement ps =
                con.prepareStatement("DELETE FROM student WHERE id=?");
        ps.setInt(1, id);

        System.out.println(ps.executeUpdate() > 0 ? "Deleted ✅" : "Not found ❌");
    }
}
