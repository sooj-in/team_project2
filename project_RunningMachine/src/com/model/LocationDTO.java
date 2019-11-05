package com.model;

import java.util.ArrayList;

public class LocationDTO {
   int location_number;
   String location;
   String addr;
   String lat;
   String lng;
   int teacherNum;

   public LocationDTO(int number, String location, String addr, String hardness, String latitude, int teacherNum) {
      this.location_number = number;
      this.location = location;
      this.addr = addr;
      this.lng = hardness;
      this.lat = latitude;
      this.teacherNum = teacherNum;
   }

   public int getNumber() {
      return location_number;
   }

   public String getLocation() {
      return location;
   }

   public String getAddr() {
      return addr;
   }

   public String getHardness() {
      return lng;
   }

   public String getLatitude() {
      return lat;
   }

   public int getTeacherNum() {
      return teacherNum;
   }

   public void setNumber(int number) {
      this.location_number = number;
   }

   public void setLocation(String location) {
      this.location = location;
   }

   public void setAddr(String addr) {
      this.addr = addr;
   }

   public void setHardness(String hardness) {
      this.lng = hardness;
   }

   public void setLatitude(String latitude) {
      this.lat = latitude;
   }

   public void setTeacherNum(int teacherNum) {
      this.teacherNum = teacherNum;
   }
}