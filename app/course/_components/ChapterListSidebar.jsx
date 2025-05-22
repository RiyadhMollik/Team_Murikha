import React, { useContext } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../@/components/ui/accordion"
import { SelectedChapterIndexContext } from '../../../context/SelectedChapterIndexSelectedChapterIndexContext';

function ChapterListSidebar({ courseInfo }) {
    const course = courseInfo?.courses;
    const enrollCourse = courseInfo?.enrollCourse;
    const courseContent = courseInfo?.courses?.courseContent;
    const { selectedChapterIndex, setSelectedChapterIndex } = useContext(SelectedChapterIndexContext);
    let completedChapters = enrollCourse?.completedChapters ?? [];
    return (
        <div className='w-3/12 bg-gray-200 h-screen  p-10 sticky top-10 overflow-y-scroll'>
            <h2 className='text-2xl font-bold my-3'>Chapter ({courseContent?.length})</h2>
            <Accordion type="single" collapsible>
                {
                    courseContent?.map((chapter, index) => {
                        return (
                            <AccordionItem value={chapter?.courseData?.chapterName} key={index}
                                onClick={() => {
                                    setSelectedChapterIndex(index);
                                }}
                            >
                                <AccordionTrigger className={`text-xl font-bold my-3 flex items-center gap-5 ${completedChapters?.includes(index) ? 'text-green-800' : ''}`}>{index + 1}. {chapter?.courseData?.chapterName}</AccordionTrigger>
                                <AccordionContent asChild>
                                    <div className='  lounded-lg'>
                                        {
                                            chapter?.courseData?.topics?.map((topic) => {
                                                return (
                                                    <div key={topic.id}>
                                                        <h2
                                                            className={`my-1 font-medium rounded-2xl p-3
                                                            ${completedChapters?.includes(index) ? 'bg-green-300 ' : 'bg-white'}
                                                            `}
                                                        >
                                                        {topic?.topic}
                                                        </h2>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>

        </div>
    )
}

export default ChapterListSidebar