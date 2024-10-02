"use client";
import { useFormStatus } from "react-dom";
export default function AddDonnerButton() {
  const { pending } = useFormStatus();
  return (
    <div>
      {" "}
      <button
        type="submit"
        disabled={pending}
        className="flex mt-4 w-full flex-col items-center justify-center bg-green-600 p-4 rounded-lg"
      >
        {pending ? "Adding..." : "Add Donner"}
      </button>
    </div>
  );
}
