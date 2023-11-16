interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialLink({ alt, href, src }: SocialLinkProps) {
  return (
    <a href={href}>
      <img
        className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14 object-contain 
        hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 ease-in-out
        rounded-full
        "
        src={src}
        alt={alt}
        data-aos="fade-up"
        data-aos-delay={100 * Math.random()}
      />
    </a>
  );
}
