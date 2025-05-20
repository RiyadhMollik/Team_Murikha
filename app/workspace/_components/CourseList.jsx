'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../../../@/components/ui/button'
import AddNewCourseDialog from './AddNewCourseDialog'

function CourseList() {
    const [courses, setCourses] = React.useState([])
    return (
        <div className='mt-10'>
            <h2 className='text-3xl font-bold'>Course List</h2>
            {CourseList?.length === 0 ? <div className='flex items-center justify-center p-7 flex-col border rounded-xl mt-2'>
                <Image src="/online-education.png" alt="Vercel Logo" width={80} height={80} />
                <h1 className='text-2xl font-bold my-2'>Look like you haven't created any course</h1>
                <AddNewCourseDialog>
                    <Button>+ Create Your First Course</Button>
                </AddNewCourseDialog>
            </div> : <div>
                <h1>List of courses</h1>
            </div>}
        </div>
    )
}

export default CourseList