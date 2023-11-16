export interface UsecaseCardProps {
  title: string;
  description: string;
  image: string;
}

export default function UsecaseCard({
  description,
  image,
  title,
}: UsecaseCardProps) {
  return (
    <div
      className="grid gap-5 md:gap-8   2xl:gap-10 place-items-center bg-blackDark2 rounded-xl px-8 py-10 md:py-16 xl:py-20 border-dark border-[0.25px]
      transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-700 
      "
      data-aos="fade-up"
    >
      <img
        src={image}
        alt="usecases"
        className="h-16 w-16 md:h-24 md:w-h-24 xl:h-28 xl:w-28 2xl:h-36 2xl:w-36 mb-4"
        data-aos="fade-up"
      />
      <h3
        className="text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center text-grayLight"
        data-aos="fade-up"
      >
        {title}
      </h3>
      <p
        className="text-grayDark text-center text-xs leading-6 sm:text-sm sm:leading-8 xl:text-base xl:leading-[2rem] max-w-md"
        data-aos="fade-up"
      >
        {description}
      </p>
    </div>
  );
}
