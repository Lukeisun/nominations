"use client";
import { WrapperProps, Group, CategoryState } from "./types";
import Groups from "./Groups";
import Submission from "./Submission";
import { useState } from "react";
export default function Component(props: WrapperProps) {
  const groups: Group[] = props.groups;
  const [selectedCategory, setCategory] = useState<CategoryState | null>(null);
  const [categoryIds, setCategoryIds] = useState(props.categoryIds);
  return (
    <div className="flex bg-thumb bg-purple1 bg-cover bg-top h-screen">
      <div className="flex flex-row justify-center m-auto gap-x-24 max-h-[36rem] sm:w-3/4 md:w-2/3 ">
        <Groups
          groups={groups}
          categoryIds={categoryIds}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
        {selectedCategory && (
          <Submission
            key={Date.now()}
            category={selectedCategory.category}
            color={selectedCategory.color}
            setCategory={setCategory}
            setCategoryIds={setCategoryIds}
          />
        )}
      </div>
    </div>
  );
}
