// import { NextResponse } from "next/server";
// import { GoogleGenAI } from "@google/genai";
// import axios from "axios";
// import { db } from "../../../config/db";
// import { coursesTable } from "../../../config/schema";
// import { eq } from "drizzle-orm";

// const prompt = `Depends on Chapter name and Topic Generate content for each topic in HTML and give response in JSON format.
// Schema:{
//   chapterName: <>,
//   {
//     topic: <>,
//     content: <>
//   }
// }
// : User Input:`;
// export async function POST(req) {
//   const { courseJson, courseTitle, courseId } = await req.json();
//   const ai = new GoogleGenAI({
//     // apiKey: process.env.GEMINI_API_KEY,
//     apiKey: "AIzaSyC_283JSjhnKm9eg9J1Kq31EHDbXywNpFg",
//   });
//   const promises = courseJson?.chapters?.map(async (chapter) => {
//     const config = {
//       responseMimeType: "text/plain",
//     };
//     //   const model = "gemma-3-12b-it";
//     const model = "gemini-2.0-flash";
//     const contents = [
//       {
//         role: "user",
//         parts: [
//           {
//             text: prompt + JSON.stringify(chapter),
//           },
//         ],
//       },
//     ];

//     const response = await ai.models.generateContent({
//       model,
//       config,
//       contents,
//     });
//     // console.log(response?.candidates[0]?.content.parts[0]?.text);

//     // console.log(response.candidates[0].content.parts[0].text);
//     const RawResp = response.candidates[0].content.parts[0].text;
//     const RawJson = RawResp.replace("```json", "").replace("```", "");
//     const JSONResp = JSON.parse(RawJson);
//     // return JSONResp;

//     //get youtube video
//     const youtubeData = await GetYoutubeVideo(chapter?.chapterName);
//     console.log("youtubeData:-", youtubeData, "courseData:-", JSONResp);
//     return {
//       youtubeVideo: youtubeData,
//       courseData: JSONResp,
//     };
//   });
//   const responses = await Promise.all(promises);

//   // Save the response to the database
//   try {
//     const CourseContent = responses;
//     const dbResp = await db
//       .update(coursesTable)
//       .set({
//         courseContent: JSON.stringify(CourseContent),
//       })
//       .where(eq(coursesTable.cid, courseId));
//   } catch (error) {
//     console.error("Database update error:", error);
//     return NextResponse.json(
//       { error: "Failed to update course content" },
//       { status: 500 }
//     );
//   }

//   return NextResponse.json({
//     CourseContent: responses,
//     CourseName: courseTitle,
//     courseId,
//   });
// }

// const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
// const GetYoutubeVideo = async (topic) => {
//   try {
//     const params = {
//       part: "snippet",
//       q: topic,
//       maxResults: 20,
//       key: process.env.YOUTUBE_API_KEY,
//     };
//     const resp = await axios.get(YOUTUBE_BASE_URL, { params });
//     const youtubeVideoListResp = resp.data.items;
//     const youtubeVideoList = [];
//     youtubeVideoListResp.forEach((item) => {
//       const data = {
//         videoId: item.id?.videoId,
//         title: item.snippet?.title,
//         thumbnail: item.snippet?.thumbnails?.default?.url,
//       };
//       youtubeVideoList.push(data);
//     });
//     console.log("youtubeVideoList:-", youtubeVideoList);
//     return youtubeVideoList;
//   } catch (error) {
//     console.error("YouTube API error:", error);
//     return [];
//   }
// };


import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import axios from "axios";
import { db } from "../../../config/db";
import { coursesTable } from "../../../config/schema";
import { eq } from "drizzle-orm";

const prompt = `Depends on Chapter name and Topic Generate content for each topic in HTML and give response in JSON format.
Schema:{
  chapterName: <>,
  {
    topic: <>,
    content: <>
  }
}
: User Input:`;
export async function POST(req) {
  try {
    const { courseJson, courseTitle, courseId } = await req.json();
    
    // Use environment variable for API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Missing GEMINI_API_KEY environment variable");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }
    
    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });
    
    const promises = courseJson?.chapters?.map(async (chapter) => {
      try {
        const config = {
          responseMimeType: "text/plain",
        };
        const model = "gemini-2.0-flash";
        const contents = [
          {
            role: "user",
            parts: [
              {
                text: prompt + JSON.stringify(chapter),
              },
            ],
          },
        ];

        const response = await ai.models.generateContent({
          model,
          config,
          contents,
        });
        
        const RawResp = response.candidates[0].content.parts[0].text;
        const RawJson = RawResp.replace("```json", "").replace("```", "");
        const JSONResp = JSON.parse(RawJson);

        // Get YouTube video
        const youtubeData = await GetYoutubeVideo(chapter?.chapterName);
        return {
          youtubeVideo: youtubeData,
          courseData: JSONResp,
        };
      } catch (error) {
        console.error(`Error processing chapter ${chapter.chapterName}:`, error);
        return {
          youtubeVideo: [],
          courseData: {
            chapterName: chapter.chapterName,
            error: "Failed to generate content for this chapter"
          }
        };
      }
    });
    
    const responses = await Promise.all(promises);

    // Save the response to the database
    try {
      const CourseContent = responses;
      const dbResp = await db
        .update(coursesTable)
        .set({
          courseContent: JSON.stringify(CourseContent),
        })
        .where(eq(coursesTable.cid, courseId));
    } catch (error) {
      console.error("Database update error:", error);
      return NextResponse.json(
        { error: "Failed to update course content" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      CourseContent: responses,
      CourseName: courseTitle,
      courseId,
    });
  } catch (error) {
    console.error("General error in generate-course-content:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
const GetYoutubeVideo = async (topic) => {
  try {
    const youtubeKey = process.env.YOUTUBE_API_KEY;
    if (!youtubeKey) {
      console.error("Missing YOUTUBE_API_KEY environment variable");
      return [];
    }
    
    const params = {
      part: "snippet",
      q: topic,
      maxResults: 8,
      key: youtubeKey,
    };
    
    const resp = await axios.get(YOUTUBE_BASE_URL, { params });
    const youtubeVideoListResp = resp.data.items;
    const youtubeVideoList = [];
    
    youtubeVideoListResp.forEach((item) => {
      const data = {
        videoId: item.id?.videoId,
        title: item.snippet?.title,
        thumbnail: item.snippet?.thumbnails?.default?.url,
      };
      youtubeVideoList.push(data);
    });
    
    return youtubeVideoList;
  } catch (error) {
    console.error("YouTube API error:", error);
    return [];
  }
};