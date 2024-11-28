import { Publication } from "@/components/Publications/types";

export const fetchPublicationsData = () => {
  const journals: Publication[] = [
    {
      id: 1,
      title: "International Journal of Computer Science",
      description: "IJCS",
      date: "2022",
    },
    {
      id: 2,
      title: "ACM Transactions on Computer Systems",
      description: "ACMTCS",
      date: "2022",
    },
    {
      id: 3,
      title: "Journal of Computer Science and Technology",
      description: "JCST",
      date: "2021",
    },
    {
      id: 4,
      title: "Springer Journal of Computer Science",
      description: "SJCS",
      date: "2020",
    },
  ];

  const conferences: Publication[] = [
    {
      id: 1,
      title: "IEEE International Conference on Computer Science",
      description: "ICCS",
      date: "2023",
    },
    {
      id: 2,
      title: "ACM International Conference on Computer Science",
      description: "AICCS",
      date: "2022",
    },
    {
      id: 3,
      title: "Springer Conference on Computer Science",
      description: "SCCS",
      date: "2021",
    },
    {
      id: 4,
      title: "National Conference on Computer Science",
      description: "NCCS",
      date: "2020",
    },
  ];

  const patents: Publication[] = [
    {
      id: 1,
      title: "Generative AI for Computer Conversations",
      description: "System and method for generating AI conversations",
      date: "2024",
    },
    {
      id: 2,
      title: "Data Science Architecture for Scalable Systems",
      description: "Architecture for scalable data science systems",
      date: "2024",
    },
  ];

  return { journals, conferences, patents };
};
