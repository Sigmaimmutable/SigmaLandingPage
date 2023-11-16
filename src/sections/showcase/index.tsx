const images = [
  "/images/showcase/gilead.png",
  "/images/showcase/veeva.png",
  "/images/showcase/gsk.png",
  "/images/showcase/pfizer.png",
  "/images/showcase/hexaware.png",
  "/images/showcase/ibm.png",
  "/images/showcase/cognizant.png",
  "/images/showcase/tech-mahindra.png",
  "/images/showcase/fidelity.png",
];

export default function Showcase() {
  return (
    <section className=" py-10 md:py-14 xl:py-20 relative bg-blackDark px-4">
      <div
        className="mt-[-12rem] md:mt-[-16rem] container px-8 py-10 mx-auto bg-white border-[0.5px] border-[#33333350] rounded-xl grid gap-8 md:gap-12 xl:gap-16 2xl:gap-20 "
        data-aos="fade-up"
      >
        <p className="text-black text-base md:text-xl xl:text-2xl 2xl:text-3xl text-center">
          Product item comprised of 20+ blockchain and Lifescience experts
          across the globe
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6 justify-center items-center">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center p-2 md:p-4 w-1/6"
              >
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
