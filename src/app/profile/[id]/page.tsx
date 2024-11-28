import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";
import PubSummary from "@/components/PubSummary";
import Publications from "@/components/Publications";
import { fetchPublicationsData } from "@/utils/fetchData";
import GoogleScholar from "@/assets/Google_Scholar_logo.png";
import ResearchGate from "@/assets/RG_Logo.png";
import LinkedIn from "@/assets/LinkedIn_logo.png";
import Java from "@/assets/java.png";

const profiles: Record<string, Profile> = {
  "dr-sanjeevi": {
    id: "dr-sanjeevi",
    name: "Dr. T. Javaya Sanjeevi",
    image: Java, // Replace with actual image path
    department: "Dept. of Computer Science and Engineering",
    institution: "Chennai Institute of Technology",
    tags: [
      "AI",
      "Machine Learning",
      "Computer Science",
      "Engineering",
      "Data Science",
      "Deep Learning",
      "Neural Networks",
    ],
    about:
      "I am a Professor in the Department of Computer Science and Engineering ...",
  },
  "john-doe": {
    id: "john-doe",
    name: "John Doe",
    image: Java,
    department: "Dept. of Artificial Intelligence",
    institution: "Chennai Institute of Technology",
    tags: [
      "AI",
      "Neural Networks",
      "Deep Learning",
      "Machine Learning",
      "Computer Vision",
      "Natural Language Processing",
    ],
    about: "I am a researcher in Artificial Intelligence ...",
  },
  // Add more profiles as needed
};

type ProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params; // Unwrap the promise here
  const profile = profiles[id];
  const { journals, conferences, patents } = fetchPublicationsData();

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <main className="w-full h-screen flex flex-row justify-between p-10">
      <section className="flex w-2/3 h-screen flex-col">
        <section className="flex flex-row">
          <Image
            className="rounded-full bg-red-50 border-2"
            src={profile.image}
            alt={profile.name}
            width={112}
            height={112}
          />
          <section className="flex flex-col text-left pl-5">
            <h1 className="text-4xl font-bold">{profile.name}</h1>
            <p className="text-lg">
              {profile.department}
              <br /> {profile.institution}
            </p>
          </section>
        </section>
        <section className="mt-2 flex flex-wrap">
          {profile.tags.map((tag, index) => (
            <Tag key={index} value={tag} />
          ))}
        </section>

        <PubSummary value={profile.name} />

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
            <tr className="h-16">
              <td className="border px-4 py-2">
                <h1 className="font-bold">
                  Generative AI for Computer Conversations
                </h1>
                <p className="text-sm">
                  Elsevier Journal of Computer Science and Engineering (JCSE),
                  2024
                </p>
              </td>
              <td className="border px-4 py-2">6</td>
              <td className="border px-4 py-2">2024</td>
            </tr>
            <tr className="h-16">
              <td className="border px-4 py-2">
                <h1 className="font-bold">
                  Convoluted Neural Networks for Image Recognition with
                  Applications in Healthcare
                </h1>
                <p className="text-sm">
                  ACM Transactions on Computer Systems (ACMTCS), 2022
                </p>
              </td>
              <td className="border px-4 py-2">7</td>
              <td className="border px-4 py-2">2022</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="flex w-1/3 h-screen flex-col text-right items-end pl-5">
        <button className=" w-1/3 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-3">
          Export{" "}
        </button>
        <section className="flex flex-row mt-5 mr-5">
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
        <section className="w-full justify-center text-left mt-5">
          <h1 className="text-2xl font-bold pl-2 pt-2">About</h1>
          <p className="text-lg text-justify pl-2 pt-2">
            I am a Professor in the Department of Computer Science and
            Engineering at Chennai Institute of Technology. I have published
            over 50 papers in the field of Computer Science and Engineering. My
            work has been cited over 15 times. I have also filed 5 patents in
            the field of Computer Science and Engineering. I have been a
            reviewer for several reputed journals and conferences in the field
            of Computer Science and Engineering. I have also been a member of
            the program committee for several reputed conferences in the field
            of Computer Science and Engineering. I'm passionate about teaching
            and research in the field of Computer Science and Engineering.
          </p>
          <Publications
            journals={journals}
            conferences={conferences}
            patents={patents}
          />
        </section>
      </section>
    </main>
  );
}
