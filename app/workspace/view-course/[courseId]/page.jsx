'use client'
import { useParams } from 'next/navigation';
import React from 'react'
import CourseEdit from '../../edit-course/[courseId]/page';

function ViewCourse() {
    const { courseId } = useParams();
  return (
    <div>
        <CourseEdit viewcourse={true} />
    </div>
  )
}

export default ViewCourse