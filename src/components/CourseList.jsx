import React, { useRef, useState } from "react";

const CourseList = (props) => {
    const courses = props.courses;
    const [isEdit, setIsEdit] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const inputRef = useRef(null);
    const renderCourse = () => {
        return (
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        <span>{course.name}</span>
                        <button onClick={() => toggleState(course)}>Edit Course</button>
                        <button onClick={() => props.deleteCourse(index)}>Delete Course</button>
                    </li>
                ))}
            </ul>
        );
    };
    const toggleState = (course) => {
        setIsEdit(! isEdit);
        setSelectedCourse(course);
    };
    const updateCourseItem = (e) => {
        e.preventDefault();
        props.editCourse(courses.indexOf(selectedCourse), inputRef.current.value);
        setIsEdit(false); 
        setSelectedCourse(null);
        };
    const renderUpdateForm = () => {
        return (
            <form onSubmit={updateCourseItem}>
                <input type="text" ref={inputRef} defaultValue={selectedCourse.name} />
                <button type="submit">updateCourse</button>
            </form>
        );
    };
    return (
        <>
            {renderCourse()}
            {isEdit ? renderUpdateForm() : null}
        </>
    );
};

export default CourseList;
