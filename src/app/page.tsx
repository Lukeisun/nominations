import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Groups from "./components/Groups";
import { Group } from "./components/types";
export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/login");
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
  return <Groups groups={groups} />;
}
