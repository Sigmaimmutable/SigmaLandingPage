const images = Array.from(
  { length: 6 },
  (_, i) => `/images/clients/${i + 1}.png`
);

export default function Clients() {
  return (
    <section>
      <div className="py-10 md:py-14 xl:pb-20 relative">
        <div className="container p-4 mx-auto flex flex-col justify-center items-center gap-14 ">
          <h2
            className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mx-auto"
            data-aos="fade-up"
          >
            Clients and Partners
          </h2>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 xl:gap-16">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex justify-center xl:px-6 xl:py-4 items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  className="h-10 md:h-16 xl:h-24 object-contain px-4 "
                  src={image}
                  alt=""
                  style={{
                    maxHeight: index === 0 ? "2.5rem" : undefined,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src="/svg/client-bg.svg"
        alt=""
        className="w-full object-contain -mb-[8%] z-40 -mt-[2%]"
      />
    </section>
  );
}
