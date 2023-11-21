"use client";
import { useState } from "react";
import { CategoryProps } from "./types";
export default function Component(props: CategoryProps) {
  const category = props.category;
  const color = `#${props.color}`;
  return (
    <div className="card gap-10" style={{ borderTop: `1.5rem solid ${color}` }}>
      <div className="flex flex-col text-4xl font-bold gap-5">
        <h1> Placeholder </h1>
        <p> Description </p>
      </div>
      <form className="flex flex-col justify-center gap-5 text-black">
        <input className="rounded" type="text" name="url" placeholder="URL" />
        <input
          className="rounded"
          type="text"
          name="justification"
          placeholder="Make your case..."
        />
      </form>
    </div>
  );
}
