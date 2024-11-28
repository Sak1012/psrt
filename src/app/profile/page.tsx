"use client";
import Image from "next/image";
import Link from "next/link";
import Collabrators from "@/components/Collabrators";
import Tag from "@/components/Tag";
import GoogleScholar from "@/assets/Google_Scholar_logo.png";
import ResearchGate from "@/assets/RG_Logo.png";
import LinkedIn from "@/assets/LinkedIn_logo.png";
import Java from "@/assets/java.png";

export default function Home() {
  const tags = [
    "AI",
    "Machine Learning",
    "Computer Science",
    "Engineering",
    "Data Science",
    "Software Engineering",
    "Web Development",
    "Mobile Development",
  ];

  return (
    <main className="w-full flex flex-row justify-between p-10">
      <section className="flex w-2/3 h-screen flex-col">
        <section className="flex flex-row">
          <Image
            className="rounded-full bg-red-50 border-2"
            src={Java}
            alt="Google Scholar"
            width={112}
            height={112}
          />
          <section className="flex flex-col text-left pl-5">
            <h1 className="text-4xl font-bold">
              Dr. T. Bharath (Java) Sanjeevi
            </h1>
            <p className="text-lg">
              Dept. of Computer Science and Engineering
              <br /> Chennai Institute of Technology
            </p>
          </section>
        </section>
        <section className="mt-2 flex flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index} value={tag} />
          ))}
        </section>
        <section className="h-1/3 bg-orange-50 border-2 rounded-lg mt-5"></section>
        <table className="table-auto mt-5 text-left">
          <thead>
            <tr>
              <th className="py-2">Title</th>
              <th className="px-4 py-2">Citations</th>
              <th className="px-4 py-2">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-16">
              <td className="border px-4 py-2">
                <h1 className="font-bold">
                  A Novel Approach for the Detection of Diabetic Retinopathy
                  Using Convolutional Neural Networks
                </h1>
                <p className="text-sm">
                  International Journal of Computer Science and Information
                  Security (IJCSIS), 2021
                </p>
              </td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">2021</td>
            </tr>
            <tr className="h-16">
              <td className="border px-4 py-2">
                <h1 className="font-bold">
                  The Art of Computer Programming and Cognitive Science
                </h1>
                <p className="text-sm">
                  National Conference on Computer Science and Engineering
                  (NCCSE), 2020
                </p>
              </td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">2020</td>
            </tr>
            <tr className="h-16">
              <td className="border px-4 py-2">
                <h1 className="font-bold">
                  The Influence of Computer Science on the Development of
                  Artificial Intelligence
                </h1>
                <p className="text-sm">
                  ACM International Conference on Computer Science and Software
                  Engineering (CSSE), 2019
                </p>
              </td>
              <td className="border px-4 py-2">3</td>
              <td className="border px-4 py-2">2019</td>
            </tr>
            <tr className="h-16">
              <td className="border px-4 py-2">
                <h1 className="font-bold">
                  The Impact of Computer Science on the Development of Machine
                  Learning
                </h1>
                <p className="text-sm">
                  IEEE International Conference on Computer Science and
                  Engineering (CSE), 2018
                </p>
              </td>
              <td className="border px-4 py-2">4</td>
              <td className="border px-4 py-2">2018</td>
            </tr>
            <tr className="h-16">
              <td className="border px-4 py-2">
                <h1 className="font-bold">
                  The Role of Computer Science in the Development of Data
                  Science
                </h1>
                <p className="text-sm">
                  Springer International Conference on Computer Science and
                  Information Technology (CSIT), 2017
                </p>
              </td>
              <td className="border px-4 py-2">5</td>
              <td className="border px-4 py-2">2017</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="flex w-1/3 h-screen flex-row justify-end">
        <section className="flex flex-col">
          <button className="h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-3">
            Export{" "}
          </button>
          <section className="flex flex-row items-center justify-center mt-5">
            <Link href="https://scholar.google.com/">
              <Image
                className="ml-2"
                src={GoogleScholar}
                alt="Google Scholar"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.researchgate.net/">
              <Image
                className="ml-2"
                src={ResearchGate}
                alt="ResearchGate"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.linkedin.com/">
              <Image
                className="ml-2"
                src={LinkedIn}
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
}
