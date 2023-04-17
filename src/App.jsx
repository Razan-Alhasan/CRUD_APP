import { useState } from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
function App() {
  const [courses , setCourses] = useState([
    {name: "C++"},
    {name: "Java"},
    {name: "Html"},
    {name: "CSS"},
  ])
  const [current, setCurrent] = useState("");
  const updateCourse = (e) =>{
    setCurrent(e.target.value);
  }
  const addCourse = (e) =>{
    e.preventDefault();
    let updateCourses = [...courses, {name: current}];
    setCourses(updateCourses);
    setCurrent("");
    console.log('Course Added');
  }
  const deleteCourse = (index) =>{
    let deletedCourse = [...courses];
    deletedCourse.splice(index, 1);
    setCourses(deletedCourse);
    console.log(index,"deleted")
  }
  const editCourse = (index, value) =>{
    let updatedCourses = [...courses];
  updatedCourses[index] = { name: value };
  setCourses(updatedCourses);
  }
  return (
    <>
    <div className="container">
    <h1>CRUD APP</h1>
    <CourseForm current={current} updateCourse = {updateCourse} addCourse = {addCourse} />
    <CourseList editCourse = {editCourse} courses = {courses}  deleteCourse={deleteCourse}/>
    </div>
    </>
  )
}
export default App
