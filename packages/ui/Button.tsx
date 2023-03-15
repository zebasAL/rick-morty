export const Button = () => {
  return (
    <button
      style={{
        background: "black",
        color: "white",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={() => console.log("you clicked me")}
    >
      My ui button
    </button>
  );
};
