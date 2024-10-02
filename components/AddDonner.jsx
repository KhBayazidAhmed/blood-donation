"use client";
import { AddData } from "@/actions";
import React from "react";
import AddDonnerButton from "./AddDonnerButton";
import { redirect, useSearchParams } from "next/navigation";

export default function AddDonner() {
  const searchParams = useSearchParams();
  return (
    <>
      <div>
        <h1 className="text-red-500 drop-shadow-2xl shadow-red-600  text-balance font-semibold text-center text-4xl ">
          Add Donner
        </h1>
        <form
          action={async (e) => {
            let res = await AddData(e);
            alert(res);
            redirect(
              `/?bg=${searchParams.get("bg")}&div=${searchParams.get(
                "div"
              )}&dist=${searchParams.get("dist")}&upz=${searchParams.get(
                "upz"
              )}`
            );
          }}
        >
          <div className="flex flex-col items-center">
            <label
              htmlFor="name"
              className="block w-fit text-nowrap   text-center  text-xl font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              id="name"
              className="block   text-gray-500 w-fit p-2 mb-4 text-center text-balance text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor="mobile"
              className="block w-fit text-nowrap   text-center  text-xl font-semibold mb-2"
            >
              Mobile
            </label>
            <input
              type="number"
              required
              name="mobile"
              id="mobile"
              className="block   text-gray-500 w-fit p-2 mb-4 text-center text-balance text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor="location"
              className="block w-fit text-nowrap   text-center  text-xl font-semibold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="block   text-gray-500 w-fit p-2 mb-4 text-center text-balance text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            hidden
            value={searchParams.get("bg")}
            name="bloodGroup"
          />
          <input
            type="text"
            hidden
            value={searchParams.get("div")}
            name="division"
          />
          <input
            type="text"
            hidden
            value={searchParams.get("dist")}
            name="district"
          />
          <input
            type="text"
            hidden
            value={searchParams.get("upz")}
            name="upazila"
          />
          <AddDonnerButton />
        </form>
      </div>
    </>
  );
}
