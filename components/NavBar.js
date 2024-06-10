import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar fixed flex justify-between items-center w-[90%] lg:w-[80%] h-[64px] bg-white shadow-2xl rounded-[32px] p-4 z-[1000] mt-4">
      <a href="/">
        <div className="flex justify-center items-center space-x-2 p-8 w-[160px]">
          <img src="/Rose.png" className="w-[28px] h-[28px]"></img>
          <div className="flex justify-center items-center">
            <h1 className="text-2xl text-primary font-bold">red</h1>
            <h1 className="text-2xl text-[#063A35] font-bold">sync</h1>
          </div>
        </div>
      </a>
      <div className="hidden md:flex justify-center items-center space-x-4 text-xl font-semibold">
        <div className="flex justify-center items-center space-x-4">
          <div className="w-[8px] h-[8px] bg-primary rounded-full"></div>
          <button>
            <a href="/">Home</a>
          </button>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <div className="w-[8px] h-[8px] bg-orange-400 rounded-full"></div>
          <a href="/contact">Contact</a>
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
      <Link href="/sign-up">
        <button className="text-xl font-bold bg-primary p-2 rounded-[32px] font-semibold text-white w-[160px]">
          Start Now
        </button>
      </Link>
    </nav>
  );
}
