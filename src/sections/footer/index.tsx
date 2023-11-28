import SocialLink from "../../components/SocialLink";

const socialLinks = [
  {
    href: "https://twitter.com/SigmaHQX",
    src: "/svg/social/twitter.svg",
    alt: "twitter",
  },
  {
    href: "https://www.linkedin.com/company/sigmahqx/",
    src: "/svg/social/linkedin.svg",
    alt: "linkedin",
  },
  {
    href: "https://github.com/Sigmaimmutable",
    src: "/svg/social/github.svg",
    alt: "github",
  },
  // {
  //   href: "https://bosongitbook.gitbook.io/sigma-immutable/",
  //   src: "/svg/social/docs.svg",
  //   alt: "docs",
  // },
  // {
  //   href: "/",
  //   src: "/svg/social/youtube.svg",
  //   alt: "youtube",
  // },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-footer py-10 md:py-14  relative">
      <div className="container p-4 mx-auto flex flex-col flex-wrap justify-center items-center gap-8 md:gap-12 ">
        {/* <img
          className="object-contain h-14 w-32 md:h-16 md:w-40 xl:h-20 xl:w-44 translate-x-[-10rem]"
          src="/svg/icon-footer.svg"
          alt="logo"
          data-aos="fade-up"
        /> */}

        <div className="flex gap-4 md:gap-5 xl:gap-6">
          {socialLinks.map(({ href, src, alt }) => (
            <SocialLink key={alt} href={href} src={src} alt={alt} />
          ))}
        </div>

        <p className="text-white text-center text-base lg:text-lg ">
          ©{year}. All copyrights reserved
        </p>
      </div>
      <img
        src="/svg/footer-circle.svg"
        alt=""
        className="absolute top-[30%] h-16 md:h-22 xl:h-24 2xl:h-28 left-0 "
      />
      <img
        src="/svg/footer-circle.svg"
        alt=""
        className="absolute bottom-[30%] h-32 md:h-22 xl:h-24 2xl:h-28 right-0 rotate-180 "
      />
    </section>
  );
}
