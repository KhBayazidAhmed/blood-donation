"use client";
import React, { useEffect } from "react";
import { areaName } from "@/db";
import { AddData } from "@/actions";

export default function Location() {
  const [division, setDivision] = React.useState(2);
  const [district, setDistrict] = React.useState("all");
  const [upazila, setUpazila] = React.useState("all");
  const [bloodGroup, setBloodGroup] = React.useState("o+");

  useEffect(() => {
    function updateUrl() {
      const url = new URL(window.location.href);
      url.searchParams.set("bg", bloodGroup);
      url.searchParams.set("div", areaName.divisions[division]?.name || "all");
      url.searchParams.set(
        "dist",
        areaName.divisions[division]?.districts[district]?.name || "all"
      );
      url.searchParams.set(
        "upz",
        areaName.divisions[division]?.districts[district]?.upazilas[upazila] ||
          "all"
      );
      window.history.pushState({}, "", url);
    }
    if (updateUrl) {
      updateUrl();
    }
  }, [bloodGroup, district, upazila, division]);
  return (
    <div className="max-w-md mx-auto p-4  ">
      <form
        action={async (e) => {
          let res = await AddData(e);
          console.log(res);
        }}
        className="flex  items-center  flex-col"
      >
        <div className="flex  gap-4 ">
          <div className="flex flex-col items-center">
            <label
              htmlFor="bloodGroup"
              className="block w-fit text-nowrap   text-center  text-xl font-semibold mb-2"
            >
              Blood Group
            </label>
            <select
              onChange={(e) => {
                setBloodGroup(e.target.value);
              }}
              name="bloodGroup"
              id="bloodGroup"
              className="block text-gray-500 w-fit p-2 mb-4 text-center text-balance text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="O+">O+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Division"
              className="block text-center text-balance text-xl font-semibold mb-2"
            >
              Division
            </label>
            <select
              onChange={(e) => setDivision(e.target.value)}
              name="Division"
              id="Division"
              defaultValue={2}
              className="block   text-gray-500 w-fit p-2 mb-4 text-center text-balance text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {areaName.divisions.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div>
            <label
              htmlFor="district"
              className="block text-center text-balance text-xl font-semibold mb-2"
            >
              District
            </label>
            <select
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              name="district"
              id="district"
              className="block w-fit text-gray-500  p-2 mb-4 text-center text-balance text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              {areaName.divisions[division]?.districts.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label
              htmlFor="Upazila"
              className="block text-center text-balance text-xl font-semibold mb-2"
            >
              Upazila
            </label>
            <select
              onChange={(e) => setUpazila(e.target.value)}
              name="upazila"
              id="Upazila"
              className="block w-fit text-gray-500  p-2 mb-4 text-center text-balance text-xl font-semibold border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All</option>
              {areaName.divisions[division]?.districts[district]?.upazilas.map(
                (item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item}
                    </option>
                  );
                }
              )}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
