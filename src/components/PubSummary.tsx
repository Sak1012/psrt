const PubSummary: React.FC<{ value: string }> = ({ value }) => {
  return (
    <section className="bg-orange-50 border-2 rounded-lg mt-5 p-5">
      <h1 className="text-2xl font-bold pl-2 pt-2">Publication Summary</h1>
      <p className="text-lg pl-2 pt-2">
        {value} has published 5 papers in the field of Computer Science and
        Engineering. His work has been cited over 15 times.
      </p>
      <h2 className="text-xl font-bold pl-2 pt-2">
        {" "}
        Total Journal Publications and Conference Publications : 15
      </h2>
      <p className="text-lg pl-2 pt-2"> List of Publications </p>
      <ul className="text-lg pl-2 pt-2 w-1/5">
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">IEEE </span>
          <span className="text-right"> 5 </span>
        </li>
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">ACM </span>
          <span className="text-right"> 4 </span>
        </li>
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">Springer </span>
          <span className="text-right"> 1 </span>
        </li>
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">Elsevier </span>
          <span className="text-right"> 2 </span>
        </li>
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">Wiley </span>
          <span className="text-right"> 3 </span>
        </li>
      </ul>
      <ul className="text-lg mt-2 w-1/3">
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">
            International Conference Papers{" "}
          </span>
          <span className="text-right"> 5 </span>
        </li>
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">
            National Conference Papers{" "}
          </span>
          <span className="text-right"> 4 </span>
        </li>
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">
            International Journal Papers{" "}
          </span>
          <span className="text-right"> 3 </span>
        </li>
        <li className="flex w-full flex-row justify-between">
          <span className="flex flex-col w-2/3">National Journal Papers </span>
          <span className="text-right"> 2 </span>
        </li>
      </ul>
    </section>
  );
};

export default PubSummary;
