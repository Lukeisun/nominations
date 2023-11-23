import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Wrapper from "./components/Wrapper";
import getGroups from "./actions/Groups";
import getSubmittedCategories from "./actions/SubmittedCategories";
export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/login");
  }
  const groups = await getGroups();
  const categoryIds = await getSubmittedCategories();
  return <Wrapper groups={groups} categoryIds={categoryIds} />;
}
