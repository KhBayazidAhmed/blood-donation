import Image from "next/image";
import bloodImage2 from "@/public/image/blood-splatter-2.png";
import DataTable from "@/components/DataTable";
import AddData from "@/components/AddData";
import Location from "@/components/Location";
export default function Home() {
  return (
    <main className="flex  min-h-screen 	bg-black  flex-col items-center justify-between p-24">
      <Image
        className="rounded-full absolute top-0 left-0 z-10"
        width={300}
        height={300}
        src={bloodImage2}
        alt="logo"
      />
      <Image
        className="rounded-full absolute top-0 right-0 z-10"
        width={300}
        height={300}
        src={bloodImage2}
        alt="logo"
      />
      <Image
        className="rounded-full absolute bottom-0 left-0 z-10"
        width={300}
        height={300}
        src={bloodImage2}
        alt="logo"
      />
      <Image
        className="rounded-full absolute bottom-0 right-0 z-10"
        width={300}
        height={300}
        src={bloodImage2}
        alt="logo"
      />
      <div className="absolute select-none flex justify-center items-center top-0 left-0 z-10  w-full h-full">
        <Image
          className="rounded-full select-none opacity-30  z-10"
          width={500}
          height={500}
          src={bloodImage2}
          alt="logo"
        />
      </div>
      <div className=" z-30 ">
        <h1 className="text-red-500 drop-shadow-2xl shadow-red-600  text-balance font-semibold text-center text-4xl ">
          Blood Donations for Quota Protest Victims
        </h1>
        <Location />

        <DataTable />
        <AddData />
      </div>
    </main>
  );
}
