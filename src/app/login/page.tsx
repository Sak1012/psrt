export default function Login(){
    return(
        <main className="w-full flex flex-col items-center justify-center p-12 h-screen">
            <h1 className="font-extrabold text-5xl">Login</h1>
            <input className="mt-5 w-30 h-10 text-2xl border border-gray-400 rounded px-3 py-2" type="text" id="name" placeholder="User Id"/>
            <input className="mt-5 w-30 h-10 text-2xl border border-gray-400 rounded font-medium px-3 py-2" type="password" id="name" placeholder="Password"/>
            <button className="mt-5 w-32 h-10 text-2xl bg-indigo-300 hover:bg-indigo-400 text-black rounded" type="submit">Submit</button>
        </main>
    ) 
}