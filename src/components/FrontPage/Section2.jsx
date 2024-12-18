const Section2 = () => {
  return (
    <>
      <div className="sec2 max-w-full md:px-6 px-4 flex flex-col items-center md:py-[100px] py-[60px] justify-center">
        <div
          className="mx-auto text-center md:max-w-[810px] mb-8
        2xl:max-w-[1280px] 2xl:text-center
        "
        >
          <h2
            className="md:text-5xl text-3xl font-bold mb-5 leading-tight md:leading-snug
          2xl:text-7xl
          "
          >
            Elevate Your Digital <br /> Experience
          </h2>
          <p
            className="md:text-xl text-[1rem] leading-relaxed text-[#95ADB1]
          2xl:text-3xl
          "
          >
            Discover powerful, tech-driven solutions tailored to elevate your
            digital experience. Our platform adapts to your needs, providing
            seamless integration, unmatched performance, and future-ready
            innovation.
          </p>
        </div>

        <div className="cards max-w-full md:max-w-[1400px] 2xl:max-w-[1520px] md:px-6 py-16 flex justify-center items-start gap-x-4 gap-y-14 flex-wrap">
          <div className="card shadow-sm flex flex-col gap-8 w-[372px] 2xl:w-[450px] p-2">
            <div className="cardImg smCard w-[70px] h-[70px] p-1 rounded-md">
              <img
                src="https://www.sketchengine.eu/wp-content/uploads/dashboard-24px.png"
                alt="icon1"
              />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl 2xl:text-3xl font-bold">
                Crafted for Startups
              </h2>
              <p className="2xl:text-xl">
                We deliver tailored tech solutions designed to accelerate
                growth. From seamless integrations to scalable innovations, we
                empower your business to thrive.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] 2xl:w-[450px] p-2">
            <div className="cardImg smCard w-[70px] h-[70px] p-2 rounded-md">
              <img
                src="https://storage.googleapis.com/datanyze-data//technologies/102403f5093398806dd11d373b93971583e4a73a.png"
                alt="icon2"
              />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold 2xl:text-3xl">
                High-quality Design
              </h2>
              <p className="2xl:text-xl">
                High-quality design that elevates your {"brand's"} visual
                identity. We create stunning, user-centric designs that make a
                lasting impression.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] 2xl:w-[450px] p-2">
            <div className="cardImg smCard w-[70px] p-2 h-[70px] rounded-md">
              <img
                src="https://cdn-icons-png.freepik.com/512/10233/10233686.png"
                alt="icon3"
              />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold 2xl:text-3xl">
                Latest Technologies
              </h2>
              <p className="2xl:text-xl">
                Harness the latest technologies to stay ahead of the curve. We
                implement cutting-edge solutions to drive innovation and
                efficiency for your business.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] 2xl:w-[450px] p-2">
            <div className="cardImg smCard w-[70px] p-2 h-[70px] rounded-md">
              <img
                src="https://sesamesoftware.com/wp-content/uploads/2021/10/data-replication-icon-blue.png"
                alt="icon4"
              />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold 2xl:text-3xl">
                Reasonable Pricing
              </h2>
              <p className="2xl:text-xl">
                Reasonable pricing that aligns with your budget. We provide
                exceptional value through cost-effective solutions tailored to
                your needs.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] 2xl:w-[450px] p-2">
            <div className="cardImg smCard w-[70px] h-[70px] p-1 rounded-md">
              <img
                src="https://cdn-icons-png.freepik.com/256/13343/13343903.png?semt=ais_hybrid"
                alt="icon5"
              />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold 2xl:text-3xl">SEO Friendly</h2>
              <p className="2xl:text-xl">
                SEO-friendly products designed to boost your online visibility.
                We ensure your solutions are optimized for search engines to
                drive traffic and enhance engagement.
              </p>
            </div>
          </div>

          <div className="card shadow-sm flex flex-col gap-8 w-[372px] 2xl:w-[450px] p-2">
            <div className="cardImg smCard w-[70px] p-2 h-[70px] rounded-md">
              <img
                src="https://cdn-icons-png.freepik.com/512/11693/11693492.png"
                alt="icon6"
              />
            </div>
            <div className="cText flex flex-col gap-4">
              <h2 className="text-xl font-bold 2xl:text-3xl">Fully Control</h2>
              <p className="2xl:text-xl">
                Full control over your product, giving you complete oversight
                and customization. Manage every aspect with ease to align with
                your vision and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
