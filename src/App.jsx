import React, { useState, useEffect } from "react";
import Core from "./components/Core";
import { useUserStore } from "./store/States";

const App = () => {
  const [timer, setTimer] = useState(120);
  const score = useUserStore((state) => state.score);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  return (
    <div>
      <div className="absolute top-10 left-5 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-semibold">
        Timer: {timer}
        {timer > 0 ? (
          <Core />
        ) : (
          <div className="w-screen h-screen flex items-center justify-center font-semibold">
            Score: {score}
          </div>
        )}
      </div>
      {timer > 0 ? (
        <div className="absolute top-10 right-5 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-semibold">
          Score: {score}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
