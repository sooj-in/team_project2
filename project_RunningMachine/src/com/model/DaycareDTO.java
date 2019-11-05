package com.model;

public class DaycareDTO {
   int daycare_number;
   String name;
   String type;
   int childNum;
   int teacherNum;
   String time;
   String bus;
   String build;
   String city;
   String local;
   String road;
   String area;
   String lat;
   String lng;
   String near;
   String score;
   
   public DaycareDTO(int daycare_number, String name, String type, int childNum, int teacherNum, String time,
         String bus, String build, String city, String local, String road, String area, String lat, String lng,
         String near, String score) {
      this.daycare_number = daycare_number;
      this.name = name;
      this.type = type;
      this.childNum = childNum;
      this.teacherNum = teacherNum;
      this.time = time;
      this.bus = bus;
      this.build = build;
      this.city = city;
      this.local = local;
      this.road = road;
      this.area = area;
      this.lat = lat;
      this.lng = lng;
      this.near = near;
      this.score = score;
   }

   public int getDaycare_number() {
      return daycare_number;
   }

   public void setDaycare_number(int daycare_number) {
      this.daycare_number = daycare_number;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getType() {
      return type;
   }

   public void setType(String type) {
      this.type = type;
   }

   public int getChildNum() {
      return childNum;
   }

   public void setChildNum(int childNum) {
      this.childNum = childNum;
   }

   public int getTeacherNum() {
      return teacherNum;
   }

   public void setTeacherNum(int teacherNum) {
      this.teacherNum = teacherNum;
   }

   public String getTime() {
      return time;
   }

   public void setTime(String time) {
      this.time = time;
   }

   public String getBus() {
      return bus;
   }

   public void setBus(String bus) {
      this.bus = bus;
   }

   public String getBuild() {
      return build;
   }

   public void setBuild(String build) {
      this.build = build;
   }

   public String getCity() {
      return city;
   }

   public void setCity(String city) {
      this.city = city;
   }

   public String getLocal() {
      return local;
   }

   public void setLocal(String local) {
      this.local = local;
   }

   public String getRoad() {
      return road;
   }

   public void setRoad(String road) {
      this.road = road;
   }

   public String getArea() {
      return area;
   }

   public void setArea(String area) {
      this.area = area;
   }

   public String getLat() {
      return lat;
   }

   public void setLat(String lat) {
      this.lat = lat;
   }

   public String getLng() {
      return lng;
   }

   public void setLng(String lng) {
      this.lng = lng;
   }

   public String getNear() {
      return near;
   }

   public void setNear(String near) {
      this.near = near;
   }

   public String getScore() {
      return score;
   }

   public void setScore(String score) {
      this.score = score;
   }   
   
}