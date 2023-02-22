// import { Button } from "ui";

const Web = () => {
  return (
    <div>
      <h1>Web</h1>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw error
      </button>
    </div>
  );
};

export default Web;
