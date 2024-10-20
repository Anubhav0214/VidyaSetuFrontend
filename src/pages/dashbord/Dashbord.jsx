import React from "react";
import "./dashbord.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import videoBg from '../../assets/images/new3.mp4';
const Dashbord = () => {
  const { mycourse } = CourseData();
  return (
    <div className="student-dashboard">
        <video className="dashbord-background-video" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <h2>All Enrolled Courses</h2>
      <div className="dashboard-content">
        {mycourse && mycourse.length > 0 ? (
          mycourse.map((e) => <CourseCard key={e._id} course={e} />) 
        ) : (
          <p>No Course Enrolled Yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashbord;
