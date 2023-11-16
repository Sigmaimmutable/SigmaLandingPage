import { useEffect, useRef } from "react";
import Portal from "./Portal";
import styles from "./Modal.module.css";
import ModalConent from "./ModalConent";
import ModalHeader from "./ModalHeader";

interface IModal {
  onClose?: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Modal({
  onClose,
  isOpen,
  children,
  className = "",
  style = {},
}: IModal) {
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose?.();
  };

  const handleEscape: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Escape") {
      handleClose(e as any);
    }
  };

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (backdrop) {
      //  stop scrollng without moving the screen to the top
      if (isOpen) {
        backdrop.style.display = "flex";
        backdrop.scrollTop = window.scrollY;
      } else {
        backdrop.style.display = "none";
        window.scrollTo(0, backdrop.scrollTop);
      }
    }
  }, [isOpen]);

  return (
    <Portal containerId="modal">
      {isOpen && (
        <>
          <div
            style={style}
            className={`${styles["modal-backdrop"]}  ${className}`}
            onClick={handleClose}
            onPointerDown={(e) => e.stopPropagation()}
            onKeyDown={handleEscape}
            ref={backdropRef}
          ></div>
          {children}
        </>
      )}
    </Portal>
  );
}

Modal.Content = ModalConent;
Modal.Header = ModalHeader;
