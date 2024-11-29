"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
  const pathname = usePathname();
  const router = useRouter();
  const clgid = pathname.split("/")[1];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="w-full flex flex-col items-center justify-center p-12 h-screen">
      <h1 className="font-extrabold text-2xl">Please Login to Continue</h1>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-1/3 h-12 border border-gray-300 rounded-lg p-2.5 mt-5"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-1/3 h-12 border border-gray-300 rounded-lg p-2.5 mt-5"
      />
      <button
        className="w-1/3 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded mt-5"
        onClick={() => {
          if (password === "javaisblack") router.replace(`profile`);
          else alert("Wrong Credentials");
        }}
      >
        Login
      </button>
    </main>
  );
}
