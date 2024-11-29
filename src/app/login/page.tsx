export default function Login() {
  return (
    <main className="w-full flex flex-col items-center justify-center p-12 h-screen">
      <h1 className="font-extrabold text-2xl">Please Login to Continue</h1>
      <input
        type="text"
        placeholder="Username"
        className="w-1/3 h-12 border border-gray-300 rounded-lg p-2.5 mt-5"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-1/3 h-12 border border-gray-300 rounded-lg p-2.5 mt-5"
      />
      <button className="w-1/3 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded mt-5">
        Login
      </button>
    </main>
  );
}
