export interface TractionCardProps {
  image: string;
  alt: string;
  text: string;
}

export default function TractionCard({
  alt = "traction",
  image,
  text,
}: TractionCardProps) {
  return (
    <div className=" relative w-full max-w-md xl:max-w-lg mx-auto grid">
      <div className="px-6 translate-y-16">
        <div
          className=" flex justify-center bg-white p-4 min-h-[20rem] items-center shadow-xl shadow-[0px_0px_16px_rgba(119, 119, 119, 0.25)] rounded-3xl min-h-[270px]
              "
          data-aos="fade-down"
        >
          <img src={image} alt={alt} className="max-h-[100px] object-contain" />
        </div>
      </div>
      <div
        className={`rounded-b-[2rem] bg-dark -z-10 relative px-4 pb-8 pt-20 bottom-cut`}
      >
        <p className="text-white font-medium md:text-xl 2xl:text-3xl text-center">
          {text}
        </p>
      </div>
    </div>
  );
}
