import { boolean, json } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

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
  bannerImageUrl: varchar().default(''),
  userEmail: varchar("userEmail")
    .references(() => usersTable.email)
    .notNull(),
});
