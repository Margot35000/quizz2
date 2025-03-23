import React, { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

function App() {
  const [step, setStep] = useState("home");
  const [answers, setAnswers] = useState([]);

  const handleStart = () => setStep("quiz");
  const handleFinish = (finalAnswers) => {
    setAnswers(finalAnswers);
    setStep("results");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {step === "home" && <Home onStart={handleStart} />}
      {step === "quiz" && <Quiz onFinish={handleFinish} />}
      {step === "results" && <Results answers={answers} />}
    </div>
  );
}

export default App;
