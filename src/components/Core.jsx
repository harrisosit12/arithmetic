import React, { useState, useEffect, useRef } from "react";
import { useUserStore } from "../store/States";

const Core = () => {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const operations = ["+", "-", "*", "/"];
  const [symbol, setSymbol] = useState();
  const [result, setResult] = useState(0);
  const score = useUserStore((state) => state.score);
  const increaseScore = useUserStore((state) => state.increaseScore);
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [sum, setSum] = useState();
  const [subtract, setSubtract] = useState();
  const [multiply, setMultiply] = useState();
  const [divide, setDivide] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    const randomizeNumbers = () => {
      let a = Math.floor(Math.random() * 99) + 2;
      let b = Math.floor(Math.random() * 99) + 2;
      let c = Math.floor(Math.random() * 11) + 2;
      let d = Math.floor(Math.random() * 99) + 2;
      let first = a > b ? a : b;
      let second = a > b ? b : a;
      let symbol = operations[Math.floor(Math.random() * operations.length)];
      setSymbol(symbol);
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
      increaseScore();
      setUserAnswer("");
    }
  };

  return (
    <div className="h-screen w-screen justify-center items-center flex">
      <div className="border flex font-semibold justify-center items-center bg-black mx-auto text-6xl">
        <h1 className="text-white p-1">
          {firstNumber} {symbol} {secondNumber} = {""}
        </h1>
        <input
          className="text-white bg-black font-semibold w-36 p-1 border-rounded"
          type="number"
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
          onKeyUp={handleKeyUp}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default Core;
