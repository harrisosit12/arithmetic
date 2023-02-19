import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const operations = ["+", "-", "*", "/"];
  const [symbol, setSymbol] = useState();
  const [result, setResult] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [sum, setSum] = useState();
  const [subtract, setSubtract] = useState();
  const [multiply, setMultiply] = useState();
  const [divide, setDivide] = useState();

  useEffect(() => {
    const randomizeNumbers = () => {
      let a = Math.floor(Math.random() * 99) + 2;
      let b = Math.floor(Math.random() * 99) + 2;
      let c = Math.floor(Math.random() * 11) + 1;
      let d = Math.floor(Math.random() * 99) + 2;
      let first = a > b ? a : b;
      let second = a > b ? b : a;
      let symbol = operations[Math.floor(Math.random() * operations.length)];
      setSymbol(symbol);

      console.log(c, d);

      switch (symbol) {
        case "+":
          setFirstNumber(first);
          setSecondNumber(second);
          setResult(first + second);
          break;
        case "-":
          setFirstNumber(first);
          setSecondNumber(second);
          setResult(first - second);
          break;
        case "*":
          setFirstNumber(d);
          setSecondNumber(c);
          setResult(d * c);
          break;
        case "/":
          setFirstNumber(d * c);
          setSecondNumber(c);
          setResult((d * c) / c);
          break;
        default:
          break;
      }
    };
    randomizeNumbers();
  }, [score]);

  const handleKeyUp = (event) => {
    if (parseFloat(userAnswer) === result) {
      setScore(score + 1);
      setUserAnswer("");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="absolute top-5 right-5 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-semibold">
        Score: {score}
      </div>
      <div className="absolute top-5 left-5 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-semibold">
        Timer: {120}
      </div>
      <div className="w-full border flex font-semibold justify-center items-center bg-black mx-auto lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">
        <h1 className="text-white">
          {firstNumber} {symbol} {secondNumber} = {""}
        </h1>
        <input
          className="text-white bg-black font-semibold w-36 p-1 border"
          type="number"
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
          onKeyUp={handleKeyUp}
        />
      </div>
    </div>
  );
};

export default App;
