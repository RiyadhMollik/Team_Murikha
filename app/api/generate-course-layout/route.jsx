import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
// import { currentUser } from "@clerk/nextjs/dist/types/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "../../../config/db";
import { coursesTable } from "../../../config/schema";
import { eq } from "drizzle-orm";
import axios from "axios";

const PROMPT = `Genrate Learning Course depends on following details. In which Make sure to add Course Name, Description,Course Banner Image Prompt (Create a modern, flat-style 2D digital illustration representing user Topic. Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools. Add symbolic elements related to user Course, like sticky notes, design components, and visual aids. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course) for Course Banner in 3d format Chapter Name, , Topic under each chapters , Duration for each chapters etc, in JSON format only

Schema:

{
  "course": {
    "name": "string",
    "description": "string",
    "category": "string",
    "level": "string",
    "includeVideo": "boolean",
    "noOfChapters": "number",

"bannerImagePrompt": "string",
    "chapters": [
      {
        "chapterName": "string",
        "duration": "string",
        "topics": [
          "string"
        ],
     
      }
    ]
  }
}

, User Input: 

`;

export async function POST(req) {
  const { courseId, ...formData } = await req.json();
  console.log(courseId, formData);

  const user = await currentUser();
  const ai = new GoogleGenAI({
    // apiKey: process.env.GEMINI_API_KEY,
    // apiKey: "AIzaSyC_283JSjhnKm9eg9J1Kq31EHDbXywNpFg",
    apiKey: "AIzaSyC7hEIE0IS2FjBGsFim4zVcocXp4RIkSSY",
  });
  const config = {
    responseMimeType: "text/plain",
  };
  //   const model = "gemma-3-12b-it";
  const model = "gemini-2.0-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: PROMPT + JSON.stringify(formData),
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });
  // console.log(response?.cordinates[0]?.content.parts[0]?.text);

  // const RawRes = response?.candidates[0]?.content.parts[0]?.text;
  const RawResp = response.candidates[0]?.content.parts[0]?.text;
  const RawJson = RawResp.replace("```json", "").replace("```", "");
  const JSONRes = JSON.parse(RawJson);

  const ImagePrompt = JSONRes.course?.bannerImagePrompt;

  //generate Image

  // const bannerImageUrl=await GenerateImage(ImagePrompt);
  //Save the response to the database
  const course = await db.insert(coursesTable).values({
    ...formData,
    courseJson: JSONRes,
    userEmail: user?.primaryEmailAddress?.emailAddress,
    cid: courseId,
    bannerImageUrl: "https://i.ibb.co/VWt9CWQp/image.png",
    // bannerImageUrl:bannerImageUrl
  });

  return NextResponse.json({ courseId });
}

const GenerateImage = async (ImagePrompt) => {
  const BASE_URL = "https://aigurulab.tech";
  const result = await axios.post(
    BASE_URL + "/api/generate-image",
    {
      width: 1024,
      height: 1024,
      input: ImagePrompt,
      model: "sdxl", //'flux'
      aspectRatio: "16:9", //Applicable to Flux model only
    },
    {
      headers: {
        "x-api-key": process?.env?.AI_GURU_LAB_API, // Your API Key
        "Content-Type": "application/json", // Content Type
      },
    }
  );
  console.log(result.data.image);
  return result.data.image;
};
