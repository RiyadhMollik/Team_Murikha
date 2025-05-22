import React from 'react'
import { SelectedChapterIndexContext } from '../../../context/SelectedChapterIndexSelectedChapterIndexContext';
import { Video } from 'lucide-react';
import YouTube from 'react-youtube';
import axios from 'axios';
import { Button } from '../../../@/components/ui/button';
import { toast } from 'sonner';
function ChapterContent({ courseInfo }) {
  const course = courseInfo?.courses;
  const enrollCourse = courseInfo?.enrollCourse;
  const courseContent = courseInfo?.courses?.courseContent;
  const { selectedChapterIndex, setSelectedChapterIndex } = React.useContext(SelectedChapterIndexContext);
  const videoData = courseContent?.[selectedChapterIndex]?.youtubeVideo;
  const topics = courseContent?.[selectedChapterIndex]?.courseData?.topics;
  let completedChapters = enrollCourse?.completedChapters ?? [];
  const markChapterCompleted = async () => {
      completedChapters.push(selectedChapterIndex);
      const result = await axios.put(`/api/enroll-course`, { completedChapter: completedChapters, courseId: course?.cid });
      console.log(result);
      toast.success('Chapter Marked Completed');
      window.location.reload();
  }
  return (
    <div className='p-10 w-9/12'>
      <div className='flex items-center justify-between'>
         <h2 className='text-3xl font-bold'>{selectedChapterIndex + 1}. {courseContent?.[selectedChapterIndex]?.courseData?.chapterName}</h2>
         {
          completedChapters?.includes(selectedChapterIndex) ? (
            <Button disabled>Completed</Button>
          ) : (
            <Button className={'cursor-pointer'} onClick={markChapterCompleted}>Mark Chapter Completed</Button>
          )
         }
      </div>
      <h2 className='text-2xl font-bold my-3 flex items-center gap-5'>Related Videos 🎞️ </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {
          videoData?.map((video, index) => {
            if (index < 2) {
              return (
                <div key={index} className='flex items-center gap-5 my-3 cursor-pointer'>
                  <YouTube videoId={video?.videoId} opts={{ height: '300', width: '500' }} />
                </div>
              );
            }
            return null;
          })
        }
      </div>
      <div className='my-10'>
        {
          topics?.map((topic, index) => {
            return (
              <div key={index} className=' gap-5 my-3 cursor-pointer mt-10 p-5 bg-gray-300 rounded-2xl'>
                <h2 className='text-xl font-bold'>{index + 1}. {topic?.topic}</h2>
                <div
                  className="prose max-w-none" 
                  style={{ whiteSpace: 'pre-wrap'  , overflowWrap: 'break-word' , lineHeight: '1' }}
                  dangerouslySetInnerHTML={{ __html: topic?.content }}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default ChapterContent