import close from "../icons/close.svg";
import styles from "./Modal.module.css";

interface IModalHeader {
  title?: string;
  titleClassName?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export default function ModalHeader({
  className = "",
  icon,
  iconClassName = "",
  onClose,
  style,
  title,
  titleClassName = "",
}: IModalHeader) {
  return (
    <div
      className={`${styles["modal-header"]} ${className}`}
      style={style}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <h1 className={`${styles["modal-heading"]} ${titleClassName}`}>
        {title}
      </h1>
      <div
        className={`${styles["modal-icon"]} ${iconClassName}`}
        onClick={onClose}
      >
        {icon ?? <img src={close} alt="close" />}
      </div>
    </div>
  );
}
