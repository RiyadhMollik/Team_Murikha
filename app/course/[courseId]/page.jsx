'use client'
import React, { useEffect } from 'react'
import AppHeader from '../../workspace/_components/AppHeader'
import ChapterListSidebar from '../../course/_components/ChapterListSidebar'
import ChapterContent from '../../course/_components/ChapterContent'
import { useParams } from 'next/navigation';
import axios from 'axios'
function Course() {
    const { courseId } = useParams();
    const[enrollCourse , setEnrollCourse] = React.useState();
    const GetEnrollCourseById = async () => {
       const res = await axios.get('/api/enroll-course?courseId='+courseId);
       const data = res.data;
       console.log(data);
       setEnrollCourse(data);
    }
    useEffect(() => {
        GetEnrollCourseById();
    },[])
    return (
        <div className=''>
            <AppHeader hideSidebar={true} />
            <div className='flex gap-10'>
                <ChapterListSidebar  courseInfo={enrollCourse}/>
                <ChapterContent  courseInfo={enrollCourse}/>
            </div>
        </div>
    )
}

export default Course