"use server";
import { getServerSession } from "next-auth";
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
let db: Database | null = null;
export default async function submitNomination(
  prevState: { message: string },
  formData: FormData,
) {
  const session = await getServerSession();
  const id: string = (formData.get("id") as string) ?? "-1";
  const email: string = (session?.user?.email as string) ?? "no email";
  if (!db) {
    db = await open({
      filename: "user_submissions.db",
      driver: sqlite3.Database,
    });
  }
  const submissions = await db.all(
    `SELECT * FROM users WHERE email="${email}"`,
  );
  if (submissions.length > 0) {
    const nominationIdArray: number[] = JSON.parse(
      submissions[0].nominationIdArray,
    );
    if (nominationIdArray.includes(+id)) {
      return { message: "Already submitted vote" };
    }
    nominationIdArray.push(+id);
    db.run(
      `UPDATE users SET nominationIdArray="${JSON.stringify(
        nominationIdArray,
      )}" WHERE email="${email}"`,
    );
  } else {
    db.run("INSERT INTO users (email, nominationIdArray) VALUES (?, ?)", [
      session?.user?.email,
      `[${id}]`,
    ]);
  }
  const discordFormattedMessage = `\`\`\`json\n${JSON.stringify(
    {
      title: formData.get("title"),
      userName: session?.user?.name ?? "",
      url: formData.get("url"),
      justification: formData.get("justification"),
    },
    null,
    2,
  )}\`\`\``;
  const data = {
    content: discordFormattedMessage,
  };
  await fetch(`${process.env.DISCORD_WEBHOOK}?wait=true`, {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  });
  return { message: "" };
}
