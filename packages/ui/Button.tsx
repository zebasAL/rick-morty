import React from "react";

interface Props {
  border?: string;
  bgColor?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string;
}

const Button: React.FC<Props> = ({
  border,
  bgColor,
  color,
  children,
  height,
  onClick, 
  radius,
  width
}) => {
  return (
    <button
    onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: color,
        border,
        padding: " 0.15rem",
        borderRadius: radius,
        height,
        cursor: "pointer",
        width
      }}
    >
      {children}
    </button>
  );
};
export default Button;
