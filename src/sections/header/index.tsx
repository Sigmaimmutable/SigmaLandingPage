import useModal from "@modals/hook/useModal";

export default function Header() {
  const {openModal} = useModal();
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white">
      <nav className="container mx-auto flex flex-wrap justify-between items-center py-2 px-4">
        <a href="/">
          <img
            className="object-contain h-10 w-28 md:h-14 md:w-32 lg:h-16 lg:w-40 xl:h-20 xl:w-44 2xl:h-24 2xl:w-48"
            src="/svg/logo-dark.svg"
            alt="logo"
          />
        </a>

        <button
          className="btn btn-fill"
          onClick={() => openModal("ContactUs")}
        >
          Contact Us
        </button>
      </nav>
    </header>
  );
}
