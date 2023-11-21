"use client";
import { useFormStatus } from "react-dom";
import { CategoryProps } from "./types";
import SubmitAction from "../actions/SubmitAction";
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="bg-white text-black rounded-md self-center p-3 w-2/3 shrink-0 text-center text-xl font-bold hover:bg-purple2;"
    >
      {pending ? "SUBMITTING" : "SUBMIT"}
    </button>
  );
}
export default function Component(props: CategoryProps) {
  const category = props.category;
  const color = `#${props.color}`;
  return (
    <div
      className="card gap-5 overflow-auto justify-start w-1/4"
      style={{ borderTop: `1.5rem solid ${color}` }}
    >
      <div className="flex flex-col text-4xl font-bold gap-5">
        <h1> {category.attributes.title} </h1>
        <p className="text-xl font-normal">{category.attributes.description}</p>
      </div>
      <form
        action={SubmitAction}
        className="flex flex-col justify-center gap-5 text-white w-full"
      >
        <input
          className="rounded bg-gray2"
          type="text"
          name="url"
          placeholder="URL"
        />
        <textarea
          className="rounded resize-none bg-gray2"
          rows={8}
          name="justification"
          placeholder="Make your case..."
        />
        <SubmitButton />
      </form>
    </div>
  );
}
