import UsecaseCard, { UsecaseCardProps } from "../../components/UsecaseCard";

const data: UsecaseCardProps[] = [
  {
    image: "/svg/use-cases/traceability.svg",
    title: "Traceability",
    description:
      "Traceability is the ability to trace something as it moves through a process. In product development, it refers to the ability to track and trace requirements to artifacts, test...runs, and anything else in the product lifecycle.",
  },
  {
    image: "/svg/use-cases/claims.svg",
    title: "Claims and Payments",
    description:
      "An amount payable to you under the Policy to compensate you for the credit losses you have sustained from unpaid insured receivables",
  },
  {
    image: "/svg/use-cases/trials.svg",
    title: "Clinical Trials",
    description:
      "Clinical trials are a type of research that studies new tests and treatments and evaluates their effects on human health outcomes",
  },
];

export default function UseCases() {
  return (
    <section className=" py-10 md:py-14 xl:py-20 relative bg-blackDark">
      <div className="container p-4 mx-auto flex flex-col flex-wrap justify-center items-center gap-12 md:gap-14 xl:gap-16 2xl:gap-20">
        <div className="flex flex-col flex-wrap justify-center items-center gap-5 md:gap-8 lg:gap-10">
          <h2
            className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold capitalize text-center mx-auto text-grayLight"
            data-aos="fade-up"
          >
            Use Cases
          </h2>
          <p
            className="text-xs sm:text-sm md:text-base xl:text-xl text-center text-blackLight max-w-5xl"
            data-aos="fade-up"
          >
            The Sigma Network provides the trust, privacy, and security of
            immutable blockchain-based services to support a world of Life
            Sciences uses, including major areas such as:
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-5 xl:gap-8"
        
        >
          {data.map((item, index) => (
            <UsecaseCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
