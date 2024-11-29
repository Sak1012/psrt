export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col items-start justify-around p-12">
      <h1 className="text-9xl font-bold">Publication Summary Tool</h1>
      <section className="flex flex-col justify-between w-1/2">
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose an Institute</option>
          <option value="CIT">Chennai Institute of Technology</option>
          <option value="IITM">IIT - Madras</option>
          <option value="NITT">NIT-Tirchy</option>
          <option value="BITSP">BITS -Pilani</option>
        </select>

        <section className="flex flex-row justify-start w-1/2 mt-10">
          <button className="w-40 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">
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
