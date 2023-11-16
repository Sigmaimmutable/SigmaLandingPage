import { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const images = [
  "/svg/slides/1.svg",
  "/svg/slides/2.svg",
  "/svg/slides/3.svg",
  "/svg/slides/4.svg",
  "/svg/slides/5.svg",
];

const Indicator = ({
  onClick,
  isSelected,
}: {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isSelected: boolean;
}) => {
  return (
    <button
      className={`w-2 h-2 md:h-3 md:w-3 xl:h-4 xl:w-4 rounded-full  ${
        isSelected ? "bg-[#666666]" : "bg-[#d0d0d0]"
      }`}
      onClick={onClick}
    ></button>
  );
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel>(null);

  const gotoIndex = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(index);
    }
  };

  return (
    <>
      <section className="py-8 md:py-14 xl:py-20 relative overflow-x-hidden">
        <div className=" p-4  flex flex-col flex-wrap justify-center items-center gap-4 md:gap-8 xl:gap-10 2xl:gap-14 pb-36 relative ">
          <div className="container mx-auto px-8 flex flex-col justify-center items-center py-4">
            <h1
              className="font-abh text-[#666666] font-bold text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center inline-block max-w-[40ch] lg:max-w-[50ch]   2xl:max-w-8xl relative mx-auto
          after:inline-block after:content-[''] after:w-full after:h-8 after:bg-hero-line after:bg-no-repeat after:bg-contain xl:after:max-w-2xl after:max-w-[8rem] 
          sm:after:max-w-[8rem] md:after:max-w-[12rem] lg:after:max-w-[25rem]
          after:absolute after:bottom-[-1.5rem] after:left-1/2 after:transform after:-translate-x-1/2 after:z-[-1] pb-4
          "
            data-aos="fade-up"
            >
              Enforcing Immutable Content Rules with Sigma:{" "}
              <span className="text-blackDark2">
                The Future of FDA Compliance
              </span>
            </h1>

            <button className="btn btn-outline mt-8 md:mt-12 xl:mt-16 "
            data-aos="fade-up"
            >
              An Patent Pending
            </button>
          </div>
          <Carousel
            ref={carouselRef}
            width={"100%"}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            swipeable={false}
            showArrows={false}
            infiniteLoop={true}
            onChange={(idx) => {
              setCurrentSlide(idx);
            }}
          >
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center p-2 md:p-4 w-full "
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full max-w-[48.5rem] h-[25rem] md:h-[30rem] xl:h-[40rem] 2xl:h-[45rem]"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="grid gap-4 xl:gap-6 absolute top-[50%] translate-y-[-50%] left-5 md:left-8 xl:left-10">
          {images.map((_, index) => {
            return (
              <Indicator
                key={index}
                isSelected={index === currentSlide}
                onClick={() => {
                  gotoIndex(index);
                }}
              />
            );
          })}
        </div>
        <div
          className="bg-[#F2F2F2]
       min-h-[30rem] absolute bottom-0 left-[-20rem] right-[-20rem] z-[-1] rounded-t-[100%] 

      "
          
        ></div>
      </section>
      <img
        src="/svg/hero-shapes.svg"
        alt=""
        className="absolute inset-0 z-[-10]"
      />
    </>
  );
}
