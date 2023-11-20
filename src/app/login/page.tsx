import Login from "../components/Login";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
export default async function Page() {
  const session = await getServerSession();
  return (
    <div className="bg-thumb bg-purple1 bg-cover bg-top h-screen">
      <SessionProvider session={session}>
        <Login />
      </SessionProvider>
    </div>
  );
}
