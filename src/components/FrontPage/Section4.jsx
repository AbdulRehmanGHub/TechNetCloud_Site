const Section4 = () => {
  return (
    <>
      <div className="sec4 md:px-4 px-4 max-w-full flex flex-col py-[60px] md:py-[100px] justify-center ">
        <div
          className="mx-auto text-center md:max-w-[810px] mb-8
        2xl:max-w-[1280px] 2xl:text-center
        "
        >
          <h2 className="md:text-5xl text-3xl font-bold mb-5 leading-tight md:leading-snug 2xl:text-7xl">
            Our Leads
          </h2>
          <p className="md:max-w-[620px] md:text-xl text-[1rem] leading-relaxed text-[#95ADB1] 2xl:text-3xl  2xl:min-w-[920px]">
            Meet our leaders, visionary professionals guiding our team with
            expertise and strategic insight. Their dedication and innovative
            approach drive our mission to deliver outstanding tech solutions.
          </p>
        </div>

        <div
          className="
        cards md:w-full md:px-6 md:py-16 md:flex md:justify-center md:items-start md:gap-8 md:flex-wrap
        w-full py-8 flex justify-center items-center gap-10 flex-wrap
        2xl:max-w-[1380px] 2xl:mx-auto
        "
        >
          <div
            className="card infoCards flex flex-col gap-8 w-[372px] py-10 px-8 shadow-md hover:shadow-lg
          2xl:w-[420px]
          "
          >
            <div className="cardText">
              <p className="2xl:text-xl">
                Python, AI, Data Science developer, MERN stack trainer
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-slate-700 w-[96%]"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="cardImg w-[50px] h-[50px] rounded-[50%] overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-01.jpg&w=1920&q=75"
                  alt="icon1"
                />
              </div>
              <div className="info">
                <h3 className="md:text-xl text-lg font-semibold 2xl:text-2xl">
                  Aliyan Shaikh
                </h3>
                <p className="text-sm text-[#95ADB1] 2xl:text-lg">
                  CEO & Founder @TechNetCloud
                </p>
              </div>
            </div>
          </div>

          <div
            className="infoCards card flex flex-col gap-8 w-[372px] py-10 px-8 shadow-md hover:shadow-lg
          2xl:w-[420px]"
          >
            <div className="cardText">
              <p className="2xl:text-xl">
                Marketing specialist, UI/UX designer & Frontend developer
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-slate-700 w-[96%]"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="cardImg w-[50px] h-[50px] rounded-[50%] overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-02.jpg&w=1920&q=75"
                  alt="icon2"
                />
              </div>
              <div className="info">
                <h3 className="md:text-xl text-lg font-semibold 2xl:text-2xl">
                  Muhammad Anas Khan
                </h3>
                <p className="text-sm text-[#95ADB1] 2xl:text-lg">
                  CMO @TechNetCloud
                </p>
              </div>
            </div>
          </div>

          <div
            className="infoCards card flex flex-col gap-8 w-[372px] py-10 px-8 shadow-md hover:shadow-lg
          2xl:w-[420px]"
          >
            <div className="cardText">
              <p className="2xl:text-xl">
                Nextjs, Nodejs, Full stack developer, Lead @TechNetCloud
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-slate-700 w-[96%]"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="cardImg w-[50px] h-[50px] rounded-[50%] overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ftestimonials%2Fauth-03.png&w=1920&q=75"
                  alt="icon3"
                />
              </div>
              <div className="info">
                <h3 className="md:text-xl text-lg font-semibold 2xl:text-2xl">
                  Muhammad Ahad
                </h3>
                <p className="text-sm text-[#95ADB1] 2xl:text-lg">
                  CTO @TechNetCloud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
