import { NextResponse } from "next/server";
import { db } from "../../../config/db"; // adjust the import as needed
import { enrollCourseTable } from "../../../config/schema"; // adjust the import path
import { coursesTable } from "../../../config/schema"; // adjust the import path
import { eq, and, desc } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";


export async function POST(req) {
    const { courseId } = await req.json();
    const user = await currentUser();

    // Check if course is already enrolled
    const enrollCourses = await db
        .select()
        .from(enrollCourseTable)
        .where(
            and(
                eq(enrollCourseTable.userEmail, user?.primaryEmailAddress?.emailAddress),
                eq(enrollCourseTable.cid, courseId)
            )
        );

    if (enrollCourses?.length === 0) {
        const result = await db
            .insert(enrollCourseTable)
            .values({
                cid: courseId,
                userEmail: user?.primaryEmailAddress?.emailAddress,
            })
            .returning();

        return NextResponse.json(result);
    }

    return NextResponse.json({ message: "Already enrolled" });
}

// GET: Get enrolled courses or one course detail
export async function GET(req) {
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress;

    if (!userEmail) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get("courseId");

    if (courseId) {
        const result = await db
            .select()
            .from(enrollCourseTable)
            .innerJoin(coursesTable, eq(coursesTable.cid, enrollCourseTable.cid))
            .where(and(eq(enrollCourseTable.userEmail, userEmail), eq(enrollCourseTable.cid, courseId)))

        return NextResponse.json(result[0]);
    }
    else {
        const result = await db
            .select()
            .from(enrollCourseTable)
            .innerJoin(coursesTable, eq(coursesTable.cid, enrollCourseTable.cid))
            .where(eq(enrollCourseTable.userEmail, userEmail))
            .orderBy(desc(enrollCourseTable.id));

        return NextResponse.json(result);
    }
}

export async function PUT(req){

    const {completedChapter , courseId} = await req.json();
    const user = await currentUser();

    const result = await db.update(enrollCourseTable).set({
        completedChapters: completedChapter
    }).where(and(eq(enrollCourseTable.userEmail, user?.primaryEmailAddress?.emailAddress), eq(enrollCourseTable.cid, courseId)))
    .returning(enrollCourseTable);

    return NextResponse.json(result);
}