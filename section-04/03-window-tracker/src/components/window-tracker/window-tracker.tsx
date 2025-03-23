import { useEffect, useState } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      console.log("Resized");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);
    return function () {
      console.log("Cleaning up");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
};

export default WindowTracker;
