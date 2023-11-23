"use client";
import { useState } from "react";
import CategoryComponent from "./CategoryComponent";
import { GroupProps, Group, CategoryProps } from "./types";
export default function Component(props: GroupProps) {
  const groups: Group[] = props.groups;
  const [selectedCategory, setCategory] = useState<CategoryProps | null>(null);
  const handleButtonClick = (categoryProp: CategoryProps) => {
    setCategory(categoryProp);
  };
  return (
    <div className="flex bg-thumb bg-purple1 bg-cover bg-top h-screen">
      <div className="flex w-2/3 flex-row justify-center m-auto gap-x-24 max-h-[36rem]">
        <div
          className="card-category"
          style={{
            display: selectedCategory ? "hidden" : "flex",
          }}
        >
          <h1 className="font-bold text-4xl"> Nominations </h1>
          <div className="flex flex-col w-full gap-y-5 overflow-auto">
            {groups.map((group: Group) => (
              <div key={group.id} className="rounded-[30px] p-8 bg-slate-700">
                <h2 className="font-bold text-xl w-3/4">
                  {group.attributes.title}
                </h2>
                {group.attributes.categories?.data.map((category) => (
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
                      })
                    }
                  >
                    <div
                      className="rounded-full w-6 h-6"
                      style={{
                        backgroundColor: `#${group.attributes.color}`,
                      }}
                    />
                    <span>{category.attributes.title}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        {selectedCategory && (
          <CategoryComponent
            key={Date.now()}
            category={selectedCategory.category}
            color={selectedCategory.color}
          />
        )}
      </div>
    </div>
  );
}
