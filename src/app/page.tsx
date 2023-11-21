import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Groups from "./components/Groups";
async function submit_nomination(formData: FormData) {
  "use server";

  // mutate data
  // revalidate cache
}
type Group = {
  id: number;
  attributes: GroupAttributes;
};
type GroupAttributes = {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  color: string;
  categories?: { data: Category[] };
};
type Category = {
  id: number;
  attributes: CategoryAttributes;
};
type CategoryAttributes = {
  title: string;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

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
  // return (
  //   <div className="flex bg-thumb bg-purple1 bg-cover bg-top h-screen">
  //     <div className="flex w-2/3 flex-row justify-center m-auto gap-x-24 max-h-[36rem]">
  //       <div className="card gap-5">
  //         <h1 className="font-bold text-4xl"> Nominations </h1>
  //         <div className="flex flex-col w-full gap-y-5 overflow-auto">
  //           {groups.map((group: Group) => (
  //             <div key={group.id} className="rounded-[30px] p-8 bg-slate-700">
  //               <h2 className="font-bold text-xl w-3/4">
  //                 {group.attributes.title}
  //               </h2>
  //               {group.attributes.categories?.data.map((category) => (
  //                 <button
  //                   type="button"
  //                   key={category.id}
  //                   className="flex flex-row p-2 gap-x-2 hover:bg-gray-500 rounded-md"
  //                 >
  //                   <div
  //                     className="rounded-full w-6 h-6"
  //                     style={{ backgroundColor: `#${group.attributes.color}` }}
  //                   />
  //                   <span>{category.attributes.title}</span>
  //                 </button>
  //               ))}
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //       <div className="card border-t-[1.5rem] border-solid border-purple3 gap-10">
  //         <div className="flex flex-col text-4xl font-bold gap-5">
  //           <h1> Placeholder </h1>
  //           <p> Description </p>
  //         </div>
  //         <form
  //           className="flex flex-col justify-center gap-5 text-black"
  //           action={submit_nomination}
  //         >
  //           <input
  //             className="rounded"
  //             type="text"
  //             name="url"
  //             placeholder="URL"
  //           />
  //           <input
  //             className="rounded"
  //             type="text"
  //             name="justification"
  //             placeholder="Make your case..."
  //           />
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}
