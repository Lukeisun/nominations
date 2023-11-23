"use server";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { Group } from "../components/types";
let db: Database | null = null;
export default async function getGroups(): Promise<Group[]> {
  if (!db) {
    db = await open({
      filename: "user_submissions.db",
      driver: sqlite3.Database,
    });
  }
  const groups_response = await fetch(
    `${process.env.API_URL}/api/category-groups?populate=*`,
    {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      }),
      cache: "force-cache",
    },
  );
  const groups: Group[] = (await groups_response.json()).data;
  return Promise.resolve(groups);
}
