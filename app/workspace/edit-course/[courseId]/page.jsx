'use client'
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import Course from '../_components/Course';
import ChapterTopicList from '../_components/ChapterTopicList';
function CourseEdit({viewcourse=false}) {
    const { courseId } = useParams();
    console.log(courseId);
    const [course , setCourse] = useState();
    const getCourseInfo = async () => {
        const result = await axios.get(`/api/course?courseId=${courseId}`);
        console.log(result.data);
        setCourse(result.data);
    }
    useEffect(() => {
        getCourseInfo();
    }, [])
    console.log(course);
    
  return (
    <div>
        <Course  course={course} viewcourse={viewcourse}/>
        <ChapterTopicList course={course}/> 
    </div>
  )
}

export default CourseEdit