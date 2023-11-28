import { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const images = [
  "/svg/slides/1.svg",
  "/svg/slides/2.svg",
  "/svg/slides/3.svg",
  // "/svg/slides/4.svg",
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
      <section className="py-8 md:py-16 xl:py-20 2xl:pb-28 relative overflow-x-hidden">
        <div className="px-2 sm:px-4 py-4  flex flex-col flex-wrap justify-center items-center gap-4 md:gap-8 xl:gap-10 2xl:gap-14 pb-36 relative ">
          <div className="container mx-auto px-8 flex flex-col justify-center items-center py-8 xl:py-10">
            <h1
              className=" text-[#666666] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4.5rem] 2xl:text-[3.5rem] 2xl:leading-[5rem] text-center inline-block max-w-[35ch] lg:max-w-[35ch]   relative mx-auto
          after:inline-block after:content-[''] after:w-full after:h-8 after:bg-hero-line after:bg-no-repeat after:bg-contain 2xl:after:max-w-md xl:after:max-w-xs after:max-w-[8rem] 
          sm:after:max-w-[8rem] md:after:max-w-[8rem] lg:after:max-w-[10rem]
          after:absolute after:bottom-[-1.5rem] after:left-1/2 after:transform after:-translate-x-1/2 after:z-[-1] pb-4
          "
              data-aos="fade-up"
            >
              Next-Gen Life Sciences Litigation Enterprise Suite{" "}<br className=""></br>
              <span className="text-blackDark2">
                FDA's CFR 21 Part 11 Compliance Simplified
              </span>
            </h1>

            <button
              className="btn btn-outline mt-8 md:mt-12 xl:mt-16 "
              data-aos="fade-up"
            >
              Patent Pending
            </button>
          </div>
          <div className="flex justify-center items-center py-2 md:hidden">
            <div className="flex gap-4 ">
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
                  className="flex justify-center items-center  w-full"
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-[30rem] md:h-[35rem] xl:h-[45rem] 2xl:h-[50rem] object-contain"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="md:grid gap-4 hidden xl:gap-6 absolute top-[50%] translate-y-[-50%] left-5 md:left-8 xl:left-10">
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
