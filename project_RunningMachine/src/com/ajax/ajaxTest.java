package com.ajax;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.model.DaycareDAO;
import com.model.DaycareDTO;
import com.model.LocationDAO;
import com.model.LocationDTO;

@WebServlet("/ajaxTest")
public class ajaxTest extends HttpServlet {
   protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

      request.setCharacterEncoding("utf-8");
      
      String keyWord = request.getParameter("keyword");   
      String jsonArr = "";
            
      if(keyWord.substring(keyWord.length()-2).equals("입지")) {
                  
         String word = keyWord.substring(0, 3);
         
         LocationDAO dao = new LocationDAO();
         ArrayList<LocationDTO> list = dao.search(word);
         
         Gson gson = new Gson();      
         jsonArr = gson.toJson(list);
         
      } else if(keyWord.substring(keyWord.length()-2).equals("순위")) {
         
         //아직 테이블 구축 안됨.
         String word = keyWord.substring(0, 3);
         
         DaycareDAO dao = new DaycareDAO();
         ArrayList<DaycareDTO> list = dao.rank_search(word);
                  
         Gson gson = new Gson();      
         jsonArr = gson.toJson(list);
      }
      
      else if(keyWord.substring(keyWord.length()-1).equals("집")) {
                  
         DaycareDAO dao = new DaycareDAO();
         ArrayList<DaycareDTO> list = dao.search(keyWord);
                  
         Gson gson = new Gson();      
         jsonArr = gson.toJson(list);
         
      } else {
         
         DaycareDAO dao = new DaycareDAO();
         ArrayList<DaycareDTO> list = dao.near_search(keyWord);
         
         Gson gson = new Gson();
         jsonArr = gson.toJson(list);
         
      }            
      
      response.setCharacterEncoding("utf-8");            
      response.getWriter().print(jsonArr);
      
      
   }

}