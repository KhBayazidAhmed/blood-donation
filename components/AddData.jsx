"use client";
import Link from "next/link";
import { useFormStatus } from "react-dom";
export default function AddData({ donnerAdd }) {
  const { pending } = useFormStatus();
  return (
    <>
      {donnerAdd ? (
        <button
          type="submit"
          disabled={pending}
          className="flex mt-4 w-full flex-col items-center justify-center bg-green-600 p-4 rounded-lg"
        >
          {pending ? "Adding..." : "Add Donner"}
        </button>
      ) : (
        <Link
          href={` /add-donner`}
          className="flex mt-4 flex-col items-center justify-center bg-green-600 p-4 rounded-lg"
        >
          Add Donner
        </Link>
      )}
    </>
    // <Link
    //   href={` /add-donner`}
    //   className="flex mt-4 flex-col items-center justify-center bg-green-600 p-4 rounded-lg"
    // >
    //   Add Data
    // </Link>
  );
}
