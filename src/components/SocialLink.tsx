interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialLink({ alt, href, src }: SocialLinkProps) {
  return (
    <a href={href} target="_blank">
      <img
        className="h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 object-contain 
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
