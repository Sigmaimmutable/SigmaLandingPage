export default function Clients() {
  return (
    <section>
      <div className="py-10 md:py-14 xl:py-24 relative">
        <div className="container p-4 mx-auto flex flex-col justify-center items-center gap-12 md:gap-14 xl:gap-20 2xl:gap-28">
          <h2
            className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold uppercase text-center mx-auto"
            data-aos="fade-up"
          >
            CLIENTS
          </h2>
          <div className="w-full flex md:flex-col lg:flex-row gap-6 md:gap-10 justify-center md:justify-around flex-wrap">
            <img
              className="h-10 md:h-16 xl:h-24 object-contain px-2"
              src="/images/juljul.png"
              alt=""
              data-aos="fade-up"
            />
            <img
              className="h-10 md:h-16 xl:h-24 object-contain px-2"
              src="/images/clinical.png"
              alt=""
              data-aos="fade-up"
            />
            <img
              className="h-10 md:h-16 xl:h-24 object-contain px-2"
              src="/images/meira.png"
              alt=""
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src="/svg/client-bg.svg"
        alt=""
        className="w-full object-contain -mb-[8%] z-40"
      />
    </section>
  );
}
