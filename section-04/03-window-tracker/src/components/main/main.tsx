import { useState } from "react";
import WindowTracker from "../window-tracker/window-tracker";

const Main = () => {
  const [show, setShow] = useState<boolean>(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <main className="container">
      <button onClick={toggleShow}>Toggle WindowTracker</button>
      {show ? <WindowTracker /> : null}
    </main>
  );
};

export default Main;
