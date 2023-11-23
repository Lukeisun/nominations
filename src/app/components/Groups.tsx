"use client";
import { GroupProps, Group, CategoryProps, Category } from "./types";
export default function Component(props: GroupProps) {
  const groups: Group[] = props.groups;
  const selectedCategory = props.selectedCategory;
  const categoryIds = props.categoryIds;
  const setCategory = props.setCategory;
  const handleButtonClick = (categoryProp: CategoryProps) => {
    setCategory(categoryProp);
  };
  return (
    <div className="flex flex-col items-center pt-10 pb-12 px-11 rounded-3xl bg-navy gap-5 w-1/3">
      <h1 className="font-bold text-4xl"> Nominations </h1>
      <div className="flex flex-col w-full gap-y-5 overflow-auto">
        {groups.map((group: Group) => (
          <div key={group.id} className="rounded-[30px] p-8 bg-slate-700">
            <h2 className="font-bold text-xl w-3/4">
              {group.attributes.title}
            </h2>
            {group.attributes.categories?.data.map((category) => {
              const isNominated = categoryIds.includes(category.id);
              return (
                <button
                  type="button"
                  key={category.id}
                  className="flex flex-row p-2 gap-x-2 hover:bg-gray-500 rounded-md"
                  style={{
                    backgroundColor:
                      selectedCategory?.category === category ? "#000" : "",
                  }}
                  onClick={() =>
                    handleButtonClick({
                      category: category,
                      color: group.attributes.color,
                      setCategory: setCategory,
                    })
                  }
                  disabled={isNominated}
                >
                  <div
                    className="rounded-full w-6 h-6"
                    style={{
                      backgroundColor: isNominated
                        ? "#888"
                        : `#${group.attributes.color}`,
                    }}
                  />
                  <span
                    style={{
                      textDecorationLine: isNominated ? "line-through" : "",
                    }}
                  >
                    {category.attributes.title}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
