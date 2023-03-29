import React from "react";

interface Props {
<<<<<<< HEAD
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
=======
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
>>>>>>> 8e858e014cc543bc03692fc1e90ff8d95054e14d
      }}
    >
      {children}
    </button>
  );
};
export default Button;
