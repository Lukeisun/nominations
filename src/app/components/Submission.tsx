"use client";
import { useFormStatus, useFormState } from "react-dom";
import { CategoryProps } from "./types";
import submitNomination from "../actions/SubmitNomination";
import getSubmittedCategories from "../actions/SubmittedCategories";
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
const initialState = {
  message: "",
};
export default function Component(props: CategoryProps) {
  const [state, formAction] = useFormState(submitNomination, initialState);
  const category = props.category;
  const setCategory = props.setCategory;
  const setCategoryIds = props.setCategoryIds;
  const color = `#${props.color}`;
  return (
    <div
      className="flex flex-col items-center pt-10 pb-12 px-11 rounded-3xl bg-navy gap-5 overflow-auto justify-start lg:w-1/3 md:w-full"
      style={{ borderTop: `1.5rem solid ${color}` }}
    >
      <div className="flex flex-col text-4xl font-bold gap-5">
        <h1> {category.attributes.title} </h1>
        <p className="text-xl font-normal">{category.attributes.description}</p>
      </div>
      <form
        action={async (formData) => {
          formAction(formData);
          setCategoryIds(await getSubmittedCategories());
          setCategory(null);
        }}
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
        <input
          type="text"
          name="id"
          className="hidden"
          defaultValue={`${category.id}`}
        />
        <input
          type="text"
          name="title"
          className="hidden"
          defaultValue={`${category.attributes.title}`}
        />
        <p aria-live="polite" className="self-center">
          {state?.message}
        </p>
        <SubmitButton />
      </form>
    </div>
  );
}
