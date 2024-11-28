import React from "react";

type Publication = {
  id: number;
  title: string;
  description: string;
  date: string;
};

type PublicationsProps = {
  journals: Publication[];
  conferences: Publication[];
  patents: Publication[];
};

const Publications: React.FC<PublicationsProps> = ({
  journals,
  conferences,
  patents,
}) => {
  return (
    <section>
      <h2 className="text-2xl font-bold pl-2 pt-2">
        Popular Journal Publications
      </h2>
      <ul className="text-lg pl-2 pt-2">
        {journals.map((journal) => (
          <li className="flex w-full flex-row justify-between" key={journal.id}>
            <span className="flex flex-col w-2/3">
              <p>{journal.title}</p>
              <p className="text-sm">{journal.description}</p>
            </span>
            <span className="text-right">{journal.date}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold pl-2 pt-2">
        Popular Conference Publications
      </h2>
      <ul className="text-lg pl-2 pt-2">
        {conferences.map((conference) => (
          <li
            className="flex w-full flex-row justify-between"
            key={conference.id}
          >
            <span className="flex flex-col w-2/3">
              <p>{conference.title}</p>
              <p className="text-sm">{conference.description}</p>
            </span>
            <span className="text-right">{conference.date}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold pl-2 pt-2"> Patents </h2>
      <ul className="text-lg pl-2 pt-2">
        {patents.map((patent) => (
          <li className="flex w-full flex-row justify-between" key={patent.id}>
            <span className="flex flex-col w-2/3">
              <p>{patent.title}</p>
              <p className="text-sm">{patent.description}</p>
            </span>
            <span className="text-right">{patent.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Publications;
