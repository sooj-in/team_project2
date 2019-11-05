package com.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class LocationDAO {

   private Connection conn;
   private PreparedStatement psmt;
   private ResultSet rs;
   private int cnt = 0;

   private void conn() {
      try {
         Class.forName("oracle.jdbc.driver.OracleDriver");
         String db_url = "jdbc:oracle:thin:@localhost:1521:xe";
         String db_id = "hr";
         String db_pw = "hr";
         conn = DriverManager.getConnection(db_url, db_id, db_pw);
      } catch (SQLException e) {
         e.printStackTrace();
      } catch (ClassNotFoundException e) {
         e.printStackTrace();
      }
   }

   private void close() {
      try {
         if (rs != null)
            rs.close();
         if (psmt != null)
            psmt.close();
         if (conn != null)
            conn.close();
      } catch (SQLException e) {
         e.printStackTrace();
         System.out.println("DB가 올바르게 종료되지 않았습니다.");
      }
   }

   public ArrayList<LocationDTO> search(String searchKeyword) {
      conn();
      ArrayList<LocationDTO> list = new ArrayList<>();

      try {
         String sql = "select * from RECOMMEND where rcmend_local = ?";      
         psmt = conn.prepareStatement(sql);
         psmt.setString(1, searchKeyword);
         rs = psmt.executeQuery();

         while (rs.next()) {
            int num = rs.getInt(1);
            String location = rs.getString(2);
            String addr = rs.getString(3);
            String lat = rs.getString(4);
            String lng = rs.getString(5);
            int teacherNum = rs.getInt(6);

            LocationDTO dto = new LocationDTO(num, location, addr, lat, lng, teacherNum);
            list.add(dto);
         }

      } catch (SQLException e) {
         System.out.println(e.getMessage());
         e.printStackTrace();
      } finally {
         close();
      }

      return list;
   }
}