export default function Pricing() {
  return (
    <main className="flex h-screen flex-col items-center overflow-hidden bg-white">
      <nav className="navbar fixed flex justify-between items-center w-[90%] lg:w-[80%] h-[64px] bg-white shadow-2xl rounded-[32px] p-4 z-[1000] mt-4">
        <a href="/">
          <div className="flex justify-center items-center space-x-2 p-8 w-[160px]">
            <img src="/logo.png" className="w-[32px] h-[32px]"></img>
            <div className="flex justify-center items-center">
              <h1 className="text-2xl text-red-700 font-bold">red</h1>
              <h1 className="text-2xl text-black font-bold">sync</h1>
            </div>
          </div>
        </a>

        <div className="hidden md:flex justify-center items-center space-x-4 text-xl font-semibold">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] bg-red-500 rounded-full"></div>
            <button>
              <a href="/">Home</a>
            </button>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] bg-orange-400 rounded-full"></div>
            <a href="/about">About</a>
          </div>

          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] bg-yellow-400 rounded-full"></div>
            <a href="/pricing">Pricing</a>
          </div>
        </div>
        <div className="md:hidden flex justify-center items-center space-x-4 text-xl font-semibold">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-[8px] h-[8px] rounded-full"></div>
          </div>
        </div>
        <button className="text-xl font-bold bg-red-500 p-2 rounded-[32px] font-semibold text-white w-[160px]">
          <a href="/contact"> Start Now</a>
        </button>
      </nav>
      <h1 className="mt-80 text-8xl font-bold text-black">Coming Soon 😊</h1>
    </main>
  );
}
