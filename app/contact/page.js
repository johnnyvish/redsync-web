export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-red">
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
      <section className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row bg-gradient-to-b from-red-300 via-red-400 to-red-500 mt-[30px] p-[28px] md:p-[40px] rounded-[48px] justify-center items-center">
            <div className="h-[400px] w-[300px] bg-gray-100 rounded-[32px] flex flex-col justify-center">
              <div className="space-y-[16px]">
                <div className="flex flex-col items-center">
                  <img
                    className="h-[80px] w-[80px] rounded-full transition-transform ease-in-out duration-300 md:hover:scale-105"
                    src="https://media.licdn.com/dms/image/C4D03AQHMXaKYQBS4xg/profile-displayphoto-shrink_800_800/0/1600825079945?e=2147483647&amp;v=beta&amp;t=xeLXLoLsiuuTO93byBQEg46kr9gkrFrUWoqJYEBrc2E"
                    alt="User Profile"
                  />
                  <p className="text-xl mt-[8px] font-semibold">Akshaj</p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-[8px]">
                  <div className="flex flex-col justify-center items-center w-[240px] h-[56px] bg-white rounded-[16px]">
                    <p className="ml-[-176px] text-[12.8px] font-semibold">
                      Phone
                    </p>
                    <a href="tel:(973)-307-7381">
                      <p className="text-[16px] text-blue-600 cursor-pointer transition-transform ease-in-out duration-300 md:hover:scale-105">
                        (973)-307-7381
                      </p>
                    </a>
                  </div>
                  <div className="mt-[32px] flex flex-col justify-center items-center w-[240px] h-[56px] bg-white rounded-[16px]">
                    <p className="ml-[-176px] text-[12.8px] font-semibold">
                      Email
                    </p>
                    <a href="mailto:ak@chataudio.com">
                      <p className="text-[16px] text-blue-600 cursor-pointer transition-transform ease-in-out duration-300 md:hover:scale-105">
                        ak@chataudio.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
