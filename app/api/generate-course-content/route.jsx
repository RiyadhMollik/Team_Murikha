import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const prompt = `Depends on Chapter name and Topic Generate content for each topic in HTML and give response in JSON format.
Schema:{
  chapterName: <>,
  {
    topic: <>,
    content: <>
  }
}
: User Input:`
export async function POST(req) {
    const { courseJson, courseTitle, courseId } = await req.json();
    const ai = new GoogleGenAI({
        // apiKey: process.env.GEMINI_API_KEY,
        apiKey: "AIzaSyC_283JSjhnKm9eg9J1Kq31EHDbXywNpFg",
    });
    const promises = courseJson?.chapters?.map(async (chapter) => {
        const config = {
            responseMimeType: "text/plain",
        };
        //   const model = "gemma-3-12b-it";
        const model = 'gemini-2.0-flash';
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
        // console.log(response?.candidates[0]?.content.parts[0]?.text);

        // console.log(response.candidates[0].content.parts[0].text);
        const RawResp = response.candidates[0].content.parts[0].text;
        const RawJson = RawResp.replace('```json', '').replace('```', '');
        const JSONResp = JSON.parse(RawJson);
        return JSONResp;
    })
    const responses = await Promise.all(promises);
    return NextResponse.json({
        CourseContent: responses,
        CourseName: courseTitle,
        courseId
    });
}