import Image from 'next/image'
import React from 'react'
import { Progress } from '../../../@/components/ui/progress';
import { Button } from '../../../@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

function EnrollCourseCard({ course, enrollCourse }) {
    const courseJson = course?.courseJson?.course;
    const calculateProgress = () => {
        return (enrollCourse?.completedChapters?.length ?? 0 / course?.courseContent?.length) * 100
    }
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
                <p className="text-gray-400 text-sm mb-4">
                    {courseJson?.description}
                </p>
            </div>
            <div className='px-4'>
                <h2 className='font-bold text-lg text-gray-900 mb-2 flex justify-between'>Progress <span className='text-sm text-gray-400'>{calculateProgress()}%</span></h2>
                <Progress value={calculateProgress()} />
                <Link href={`/workspace/view-course/${course?.cid}`}>
                    <Button className='mt-4 w-full my-2'><PlayCircle className='mr-2' /> Continue Learning</Button>
                </Link>
            </div>

        </div>
    )
}

export default EnrollCourseCard