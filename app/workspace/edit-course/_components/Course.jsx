"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Loader2Icon, Sparkle } from "lucide-react";
import Link from "next/link";

function Course({ course, viewcourse }) {
  const courseLayout = course?.courseJson?.course;
  console.log(course?.courseJson?.course, "course");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const GenerateCourseContent = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/generate-course-content", {
        courseJson: courseLayout,
        courseId: course?.cid,
        courseTitle: courseLayout?.name,
      });
      console.log(result.data, "course content");
      setLoading(false);
      router.replace("/workspace");
      toast.success("Course Content Generated Successfully!");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Server Side error, Try Again!");
    }
  };
  console.log(course);
  
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
                <div className="font-semibold text-gray-800">{course?.no0fChapters}</div>
              </div>
            </div>

            <div className="flex items-center bg-gray-100 px-4 py-3 rounded-lg w-48">
              <span className="text-red-600 text-xl mr-2">📈</span>
              <div>
                <div className="text-sm text-gray-600">Difficulty Level</div>
                <div className="font-semibold text-gray-800 capitalize">
                 {course?.level}
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          {
            !viewcourse ? <button
              disabled={loading}
              onClick={GenerateCourseContent}
              className="bg-purple-600 flex items-center justify-center gap-5 w-full text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              {loading ? (
                <Loader2Icon className="animate-spin" />
              ) : (
                <Sparkle />
              )}{" "}
              Generate Content
            </button> : <Link href={`/course/${course?.cid}`}>
              <button
                className="bg-purple-600 flex items-center justify-center gap-5 w-full text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                <Sparkle />

                Continue Learning
              </button>
            </Link>
          }
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
  );
}

export default Course;
