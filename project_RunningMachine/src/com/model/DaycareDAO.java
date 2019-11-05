package com.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class DaycareDAO {

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
   
   public ArrayList<DaycareDTO> search(String searchKeyword) {
      conn();
      ArrayList<DaycareDTO> list = new ArrayList<>();

      try {
         String sql = "select * from DAYCARE_CENTER where care_name = ?";
         psmt = conn.prepareStatement(sql);
         psmt.setString(1, searchKeyword);
         rs = psmt.executeQuery();

         while (rs.next()) {
            int number = rs.getInt(1);
            String name = rs.getString(2);
            String type = rs.getString(3);
            int childNum = rs.getInt(4);
            int teacherNum = rs.getInt(5);
            String time = rs.getString(6);
            String bus = rs.getString(7);
            String build = rs.getString(8);
            String city = rs.getString(9);
            String local = rs.getString(10);
            String road = rs.getString(11);
            String area = rs.getString(12);
            String lat = rs.getString(13);
            String lng = rs.getString(14);
            String near = rs.getString(16);
            String score = rs.getString(15);
            

            DaycareDTO dto = new DaycareDTO(number, name, type, childNum, teacherNum, time, bus, build, city, local, road, area, lat, lng, near, score);
            list.add(dto);
         }

      } catch (SQLException e) {
         e.printStackTrace();
      } finally {
         close();
      }

      return list;
   }
   
   public ArrayList<DaycareDTO> near_search(String searchKeyword) {
      conn();
      ArrayList<DaycareDTO> list = new ArrayList<>();

      try {
         String sql = "select * from DAYCARE_CENTER where care_near = ?";
         psmt = conn.prepareStatement(sql);
         psmt.setString(1, searchKeyword);
         rs = psmt.executeQuery();

         while (rs.next()) {
            int number = rs.getInt(1);
            String name = rs.getString(2);
            String type = rs.getString(3);
            int childNum = rs.getInt(4);
            int teacherNum = rs.getInt(5);
            String time = rs.getString(6);
            String bus = rs.getString(7);
            String build = rs.getString(8);
            String city = rs.getString(9);
            String local = rs.getString(10);
            String road = rs.getString(11);
            String area = rs.getString(12);
            String lat = rs.getString(13);
            String lng = rs.getString(14);
            String near = rs.getString(16);
            String score = rs.getString(15);

            DaycareDTO dto = new DaycareDTO(number, name, type, childNum, teacherNum, time, bus, build, city, local, road, area, lat, lng, near, score);
            list.add(dto);
         }

      } catch (SQLException e) {
         e.printStackTrace();
      } finally {
         close();
      }

      return list;
   }
   //아직 안됨.
   public ArrayList<DaycareDTO> rank_search(String searchKeyword) {
      conn();
      ArrayList<DaycareDTO> list = new ArrayList<>();

      try {
         String sql = "select * from (select * from DAYCARE_CENTER order by CARE_SCORE desc) where care_area = ? and rownum <= 10";
         psmt = conn.prepareStatement(sql);
         psmt.setString(1, searchKeyword);
         rs = psmt.executeQuery();

         while (rs.next()) {
            int number = rs.getInt(1);
            String name = rs.getString(2);
            String type = rs.getString(3);
            int childNum = rs.getInt(4);
            int teacherNum = rs.getInt(5);
            String time = rs.getString(6);
            String bus = rs.getString(7);
            String build = rs.getString(8);
            String city = rs.getString(9);
            String local = rs.getString(10);
            String road = rs.getString(11);
            String area = rs.getString(12);
            String lat = rs.getString(13);
            String lng = rs.getString(14);
            String near = rs.getString(16);
            String score = rs.getString(15);

            DaycareDTO dto = new DaycareDTO(number, name, type, childNum, teacherNum, time, bus, build, city, local, road, area, lat, lng, near, score);
            list.add(dto);
         }

      } catch (SQLException e) {
         e.printStackTrace();
      } finally {
         close();
      }

      return list;
   }
}