import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/login");
  }
  return (
    <div className="bg-thumb bg-purple1 bg-cover bg-top h-screen">
      <h1> Home </h1>
    </div>
  );
}
