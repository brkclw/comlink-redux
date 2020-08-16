import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourseAction, deleteCourseAction, fetchData } from '../../store/actions';

export default function CourseList() {

  const courses = useSelector(state => state.courses.data);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    // setIsLoading(true);
    // setTimeout(() => {
    //   dispatch(fetchData());
    //   setIsLoading(false);
    // }, 3000);
  }, [dispatch])


  function addCourse() {
    dispatch(addCourseAction('GraphQL', 10))
  }

  function deleteCourse() {
    dispatch(deleteCourseAction());
  }

  const renderCourseList = () => {
    if (isLoading) {
      return <span>loading</span>
    }
    return (
      <>
        <ul>
          {/* {courses.map(course => <li key={course}>{course}</li>)} */}
          <Nice courses={courses} />
        </ul>
        <button type="button" onClick={addCourse}>
          Dodaj
        </button>
        <button type="button" onClick={deleteCourse}>
          Usuń
        </button>
      </>
    )
  }

  return (
    renderCourseList()
  )
}


const Nice = React.memo(function NiceKursy({courses}) {
  return (
    courses.map((course) => <p>{course}</p>)
  )
})
