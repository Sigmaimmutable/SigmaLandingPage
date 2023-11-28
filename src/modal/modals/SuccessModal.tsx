import Modal from "../components/Modal";
import useModal from "../hook/useModal";

export default function SuccessModal() {
  const { closeModal, isOpen } = useModal();

  return (
    <Modal isOpen={isOpen("SuccessModal")} onClose={closeModal}>
      <Modal.Content className="!rounded-2xl !top-[20%] !max-w-[40rem]">
        <div className="relative grid gap-4">
          <button
            className="border-[2px] border-black h-7 w-7 xl:h-8 xl:w-8 rounded-full flex justify-center items-center absolute right-0"
            onClick={closeModal}
          >
            <img
              src="/svg/close.svg"
              alt=""
              className="w-2 h-2 xl:w-3 xl:h-3"
            />
          </button>
          <div className="px-4 py-4 md:px-10 md:py-8 xl:px-14 xl:py-10 gap-4 xl:gap-10 max-h-[90vh] overflow-y-scroll scrollbar-hide flex flex-col justify-center items-center">
            <img
              src="/svg/tick.svg"
              alt=""
              className="w-14 h-14 md:w-16 md:h-16 xl:w-24 xl:h-24 mx-auto"
            />
            <p className="text-black text-lg sm:text-xl md:text-2xl xl:text-3xl text-center">
              We've received your message, and a member of our team will be in
              touch with you soon. Thank you!
            </p>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
}
