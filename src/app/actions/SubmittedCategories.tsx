"use server";
import { getServerSession } from "next-auth";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
let db: Database | null = null;
export default async function getSubmittedCategories(): Promise<number[]> {
  const session = await getServerSession();
  const email: string = session?.user?.email as string;
  if (!db) {
    db = await open({
      filename: "user_submissions.db",
      driver: sqlite3.Database,
    });
  }
  const submissions = await db.all(
    `SELECT * FROM users WHERE email="${email}"`,
  );
  const categoryIds = submissions.map((fields) => fields.categoryId);
  return Promise.resolve(categoryIds);
}
