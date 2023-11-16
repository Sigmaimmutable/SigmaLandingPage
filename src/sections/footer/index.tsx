import SocialLink from "../../components/SocialLink";

const socialLinks = [
  {
    href: "/",
    src: "/svg/social/twitter.svg",
    alt: "twitter",
  },
  {
    href: "/",
    src: "/svg/social/linkedin.svg",
    alt: "linkedin",
  },
  {
    href: "/",
    src: "/svg/social/discord.svg",
    alt: "discord",
  },
  {
    href: "/",
    src: "/svg/social/reddit.svg",
    alt: "reddit",
  },
  {
    href: "/",
    src: "/svg/social/youtube.svg",
    alt: "youtube",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="bg-footer py-10 md:py-14 xl:py-20 relative">
      <div className="container p-4 mx-auto flex flex-col flex-wrap justify-center items-center gap-12 md:gap-14 xl:gap-16 2xl:gap-20">
        <img
          className="object-contain h-14 w-32 md:h-16 md:w-40 xl:h-20 xl:w-44 2xl:h-24 2xl:w-48"
          src="/svg/icon-footer.svg"
          alt="logo"
          data-aos="fade-up"
        />

        <div className="flex gap-4 md:gap-5 xl:gap-6 2xl:gap-8">
          {socialLinks.map(({ href, src, alt }) => (
            <SocialLink key={alt} href={href} src={src} alt={alt} />
          ))}
        </div>

        <p
          className="text-white text-center text-base lg:text-lg 2xl:text-xl"
          data-aos="fade-up"
        >
          ©{year}. All copyrights reserved
        </p>
      </div>
      <img
        src="/svg/footer-circle.svg"
        alt=""
        className="absolute bottom-[30%] h-32 md:h-44 xl:h-52 2xl:h-56 left-0 "
      />
      <img
        src="/svg/footer-circle.svg"
        alt=""
        className="absolute bottom-[30%] h-32 md:h-44 xl:h-52 2xl:h-56 right-0 rotate-180 "
      />
    </section>
  );
}
