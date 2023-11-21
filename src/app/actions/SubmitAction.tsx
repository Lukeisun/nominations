"use server";

import { getServerSession } from "next-auth";

export default async function submit_nomination(formData: FormData) {
  const session = await getServerSession();
  const discordFormattedMessage = `\`\`\`json\n${JSON.stringify(
    {
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
}
