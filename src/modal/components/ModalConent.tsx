import React from "react";
import styles from "./Modal.module.css";

interface IModalConent {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ModalConent({
  children,
  className = "",
  style,
}: IModalConent) {
  return (
    <div
      style={style}
      className={`${styles["modal-content"]} ${className}`}
      onPointerDown={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
