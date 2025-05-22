import { boolean, json, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  cid: varchar().notNull(),
  name: varchar().notNull(),
  description: varchar().notNull(),
  no0fChapters: integer().notNull(),
  includeVideo: boolean().default(false),
  level: varchar().notNull(),
  catetgory: varchar().notNull(),
  courseJson: json(),
  bannerImageUrl: varchar().default(""),
  courseContent: json().default({}),
  userEmail: varchar("userEmail")
    .references(() => usersTable.email)
    .notNull(),
});

export const enrollCourseTable = pgTable("enrollCourse", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  cid: varchar("cid", { length: 255 }).references(() => coursesTable.cid),
  userEmail: varchar("userEmail", { length: 255 }).references(() => usersTable.email),
  completedChapters: json("completedChapters"),
});