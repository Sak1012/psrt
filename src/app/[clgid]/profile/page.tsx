"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const people: { id: string; name: string }[] = [
  { id: "dr-sanjeevi", name: "Dr. T. Javaya Sanjeevi" },
  { id: "john-doe", name: "Dr. John Doe" },
  { id: "jane-smith", name: "Dr. Jane Smith" },
];

export default function ProfileList() {
  const pathname = usePathname();
  const clgid = pathname.split("/")[1];
  return (
    <main className="w-full h-screen p-10">
      <section className="flex flex-row justify-between">
        <h1 className="text-3xl font-bold mb-5">Profiles</h1>
        <h1 className="text-3xl font-bold mb-5">Name of Institute</h1>
      </section>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-lg pl-5">Name</th>
            <th className="text-left text-lg pl-5">Department</th>
            <th className="text-right text-lg pl-5">Scholar</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr className="h-16 border-b-2 " key={person.id}>
              <td>
                <Link
                  href={`/${clgid}/profile/${person.id}`}
                  className="pl-5 text-blue-500 hover:underline text-lg"
                >
                  {person.name}
                </Link>
              </td>
              <td className="text-left">Computer Science</td>
              <td className="text-right text-blue-500 hover:underline">
                Google Scholar
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
