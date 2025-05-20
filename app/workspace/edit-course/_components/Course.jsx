'use client'
import axios from 'axios';
import React, { useState } from 'react'

function Course({ course }) {
    const courseLayout = course?.courseJson?.course;
    console.log(course?.courseJson?.course, 'course');
    const [loading, setLoading] = useState(false);
    const GenerateCourseContent = async () => {
        setLoading(true);
        try {
            const result = await axios.post("/api/generate-course-content", {
                courseJson: courseLayout,
                courseId: course?.cid,
                courseTitle: courseLayout?.name
            });
            console.log(result.data , "course content");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-md p-6 space-y-4 md:space-y-0 md:space-x-6  mx-auto">
                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                        {courseLayout?.name}
                    </h2>
                    <p className="text-gray-600 mt-2 mb-4 max-w-xl">
                        {courseLayout?.description}
                    </p>

                    {/* Info Boxes */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg w-40">
                            <span className="text-blue-600 text-xl mr-2">⏰</span>
                            <div>
                                <div className="text-sm text-gray-600">Duration</div>
                                <div className="font-semibold text-gray-800">2 Hours</div>
                            </div>
                        </div>

                        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg w-40">
                            <span className="text-green-600 text-xl mr-2">📖</span>
                            <div>
                                <div className="text-sm text-gray-600">Chapters</div>
                                <div className="font-semibold text-gray-800">2 Hours</div>
                            </div>
                        </div>

                        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg w-48">
                            <span className="text-red-600 text-xl mr-2">📈</span>
                            <div>
                                <div className="text-sm text-gray-600">Difficulty Level</div>
                                <div className="font-semibold text-gray-800 capitalize">beginner</div>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <button disabled={loading} onClick={GenerateCourseContent} className="bg-purple-600 w-full text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                        <span role="img" aria-label="gear" className="mr-2">⚙️</span>
                        Generate Content
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/3">
                    <img
                        src={course?.bannerImageUrl}
                        alt="Course Visual"
                        className="rounded-xl object-cover w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Course