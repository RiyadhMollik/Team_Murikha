import axios from 'axios'
import React, { use, useEffect } from 'react'
import EnrollCourseCard from './EnrollCourseCard'
function EnrollCourseList() {
    const [enrollCourse, setEnrollCourse] = React.useState([]);
    const GetEnrollCourse = async () => {
       const res = await axios.get('/api/enroll-course');
       const data = res.data;
       console.log(data);
       setEnrollCourse(data);
    }
    useEffect(() => {
        GetEnrollCourse();
    },[])
  return enrollCourse?.length > 0 && (
    <div className='mt-10'>
        <h2 className='text-3xl font-bold'>Continue Learning your favorite course</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            {enrollCourse?.map((course , index) => {
                return <div key={index} className='text-black'>
                    <EnrollCourseCard course={course?.courses} enrollCourse={course.enrollCourse} />
                </div>
            })}
        </div>
    </div>
  )
}

export default EnrollCourseList