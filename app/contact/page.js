import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-red">
      <NavBar />
      <section className="flex flex-col justify-center items-center min-h-screen pb-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-black mt-24 text-center">
            Interested?
          </h1>
          <span className="text-3xl md:text-4xl mt-8">Contact Akshaj.</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row bg-primary mt-[32px] p-[28px] md:p-[40px] rounded-[48px] justify-center items-center">
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
                    <a href="mailto:akshajtyagi1@gmail.com">
                      <p className="text-[16px] text-blue-600 cursor-pointer transition-transform ease-in-out duration-300 md:hover:scale-105">
                        akshajtyagi1@gmail.com
                      </p>
                    </a>
                  </div>
                  <div className="mt-[32px] flex flex-col justify-center items-center w-[240px] h-[56px] bg-white rounded-[16px]">
                    <p className="ml-[-160px] text-[12.8px] font-semibold">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/akshaj-tyagi-6843341b6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-[16px] text-blue-600 cursor-pointer transition-transform ease-in-out duration-300 md:hover:scale-105">
                        Akshaj Tyagi
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
