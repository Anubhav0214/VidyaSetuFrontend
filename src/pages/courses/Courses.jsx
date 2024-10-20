import React from 'react'
import "./courses.css"
import { CourseData } from '../../context/CourseContext'
import CourseCard from '../../components/coursecard/CourseCard';
import videoBg from '../../assets/images/231596.mp4';
const Courses = () => {

    const {courses}= CourseData();


    console.log(courses)
    return (
    <div className="courses">
        <video className="courses-background-video" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
        <h2>Available Courses</h2>
        <div className="course-container">
            {
                courses && courses.length>0 ?courses.map((e)=>(
                    <CourseCard key={e._id} course={e} />
                )) : <p>No Courses Yet!</p>
            }
        </div>
    </div>
)
  
}

export default Courses