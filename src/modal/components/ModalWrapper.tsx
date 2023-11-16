import { useContext } from "react";

import ModalContext from "modal/state/ModalContext";
import ModalProvider from "modal/state/ModalProvider";
import modals from "modal";

export type TModals = keyof typeof modals;

const RenderModal = () => {
  const { state } = useContext(ModalContext);
  const Component = modals[state?.modal?.name as TModals];

  return Component ? <Component {...state?.modal?.props} /> : null;
};

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      {children}
      <RenderModal />
    </ModalProvider>
  );
};

export default ModalWrapper;
