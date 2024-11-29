"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const colleges: Array<{
    name: string;
    id: string;
  }> = [
    {
      name: "Chennai Institute of Technology",
      id: "CIT",
    },
    {
      name: "IIIT - Madras",
      id: "IITM",
    },
    {
      name: "NIT - Trichy",
      id: "NITT",
    },
  ];

  const [clgid, setClgId] = useState<string>("");
  const router = useRouter();

  return (
    <main className="flex w-full h-screen flex-col items-start justify-around p-12">
      <h1 className="text-9xl font-bold">Publication Summary Tool</h1>
      <section className="flex flex-col justify-between w-1/2">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setClgId(e.target.value)} // Update state on selection
        >
          <option defaultValue="true"> Choose Institute </option>
          {colleges.map((ele) => {
            return (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            );
          })}
        </select>
        <section className="flex flex-row justify-start w-1/2 mt-10">
          <button
            className="w-40 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded"
            onClick={() => {
              if (!clgid) alert("Please select a Institute");
              else router.push(`${clgid}/login`);
            }}
          >
            Login
          </button>
          <button className="w-40 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded ml-5">
            Register
          </button>
        </section>
      </section>
    </main>
  );
}
