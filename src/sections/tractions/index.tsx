import TractionCard, { TractionCardProps } from "../../components/TractionCard";


const data: TractionCardProps[] = [
  {
    alt: "traction1",
    image: "/images/traction-1.png",
    text: "Nominated as top 15 emerging startup in USA 2022.",
  },
  {
    alt: "traction2",
    image: "/images/traction-2.png",
    text: "Hackathon Champion in 2022",
  },
  {
    alt: "traction3",
    image: "/images/traction-3.png",
    text: "Blockchain partner",
  },
];

export default function Tractions() {
  return (
    <section className=" py-10 md:py-14 xl:py-20 relative">
      <div className="container p-4 mx-auto flex flex-col flex-wrap justify-center items-center gap-12 md:gap-14 xl:gap-16 2xl:gap-20">
        <div className="flex flex-col flex-wrap justify-center items-center gap-5 md:gap-8 lg:gap-10">
          <h2
            className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold capitalize text-center mx-auto"
            data-aos="fade-up"
          >
            Traction (2021 - 2023)
          </h2>
          <ul
            className="flex gap-4 flex-wrap justify-center items-center"
            data-aos="fade-up"
          >
            <li className="text-xs sm:text-sm md:text-base xl:text-xl flex items-center gap-2 before:content-[''] before:block before:h-[8px] before:w-[8px] before:rounded-full before:bg-dark first:before:hidden">
              Award Winning
            </li>
            <li className="text-xs sm:text-sm md:text-base xl:text-xl flex items-center gap-2 before:content-[''] before:block before:h-[8px] before:w-[8px] before:rounded-full before:bg-dark">
              Top Ranked
            </li>
            <li className="text-xs sm:text-sm md:text-base xl:text-xl flex items-center gap-2 before:content-[''] before:block before:h-[8px] before:w-[8px] before:rounded-full before:bg-dark">
              Well Recognized
            </li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 w-full gap-5 xl:gap-8">
          {data.map((item, index) => (
            <TractionCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
