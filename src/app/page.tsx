import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/login");
  }
  // const api_url = process.env!.API_URL as URL
  // const categories_response = await fetch(
  //   `${process.env.API_URL}/api/categories`,
  //   {
  //     method: "get",
  //     headers: new Headers({
  //       Authorization: `Bearer ${process.env.API_TOKEN}`,
  //     }),
  //     cache: "force-cache",
  //   },
  // );
  // const categories = await categories_response.json();
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
  const groups = await groups_response.json();
  console.log(groups);
  return (
    <div className="bg-thumb bg-purple1 bg-cover bg-top h-screen">
      <h1> Home </h1>
    </div>
  );
}
