import React from "react";

interface Props {
  bgColor?: string;
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ bgColor, color, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: color,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};
export default Button;
