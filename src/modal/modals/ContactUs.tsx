import TextInput from "@components/TextInput";
import Modal from "../components/Modal";
import useModal from "../hook/useModal";
import TextArea from "@components/TextArea";

export default function ContactUs() {
  const { closeModal, isOpen } = useModal();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen("ContactUs")} onClose={closeModal}>
      <Modal.Content className="!rounded-2xl !top-[4%]">
        <div className="relative grid gap-4">
          <button
            className="border-[2px] border-black h-7 w-7 xl:h-12 xl:w-12 rounded-full flex justify-center items-center absolute right-0"
            onClick={closeModal}
          >
            <img
              src="/svg/close.svg"
              alt=""
              className="w-3 h-3 xl:w-6 xl:h-6"
            />
          </button>
          <div className="px-4 py-4 md:px-10 md:py-8 xl:px-14 xl:py-10 grid gap-10 max-h-[90vh] overflow-y-scroll scrollbar-hide">
            <h1 className="text-black font-bold text-xl sm:text-3xl md:text-4xl xl:text-5xl">
              Contact Us
            </h1>

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <TextInput
                label="First Name"
                placeholder="Enter your first name"
              />
              <TextInput label="Last Name" placeholder="Enter your last name" />
              <TextInput
                label="Email"
                placeholder="Enter your email"
                // @ts-ignore
                type="email"
              />
              <TextInput
                label="Company Name"
                placeholder="Enter your company name"
              />
              <TextArea label="Message" placeholder="Enter your message" />
              <button
                className="border-[1px] border-black bg-black border-solid px-6 py-2 md:px-6 md:py-4 xl:px-8 xl:py-4 font-medium text-white mt-4 text-base md:text-lg xl:text-2xl"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}
