'use client'
import { Book, Facebook, PlayCircle, Settings } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from '../../../@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';
import axios from 'axios';

function CourseCard({ course }) {
  const courseJson = course?.courseJson?.course;
  const [loading, setLoading] = useState(false);
  const onEnrollCourse = async () => {
    try {
      setLoading(true);
      const result = await axios.post('/api/enroll-course', {
        courseId: course?.cid
      });
      console.log(result.data);
      toast.success('Course Enrolled Successfully');
      setLoading(false);
      window.location.reload();
    } catch (e) {
      toast.error('Server side error');
      setLoading(false);
    }
  };
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <Image
        className="w-full h-48 object-cover"
        src={course?.bannerImageUrl}
        alt={courseJson?.name}
        width={500}
        height={500}
      />
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-900 mb-2">
          {courseJson?.name}
        </h2>
        <p className="text-gray-400 text-sm mb-4 min-h-20">
          {courseJson?.description}
        </p>
        <div className="flex justify-between items-center text-gray-700 text-sm">
          <div className="flex items-center gap-1">
            <Book className="text-purple-600" />
            <span>{courseJson?.noOfChapters} Chapters</span>
          </div>
          <div className="flex items-center gap-2  border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100 text-gray-700">

            {course?.courseContent?.length ? <Button onClick={onEnrollCourse}><PlayCircle /> Enroll Course</Button> : <Link href={`/workspace/edit-course/${course?.cid}`}><Button><Settings /> Generate Content</Button></Link>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard