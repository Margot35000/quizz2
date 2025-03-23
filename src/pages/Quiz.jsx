import React, { useState } from "react";

const questions = [
  {
    question: "Qu’est-ce que tu préfères faire pendant ton temps libre ?",
    options: ["Créer du contenu", "Aider les autres", "Résoudre des problèmes", "Travailler en équipe"],
  },
  {
    question: "Tu te sens le plus à l’aise...",
    options: ["Devant un ordi", "En contact avec des gens", "En extérieur", "En autonomie"],
  },
  {
    question: "Ce qui compte le plus pour toi dans un job ?",
    options: ["L’utilité", "Le salaire", "Le fun", "La stabilité"],
  },
];

function Quiz({ onFinish }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    if (current + 1 < questions.length) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const q = questions[current];

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">{q.question}</h2>
      <div className="space-y-3">
        {q.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="block w-full bg-blue-100 text-blue-800 px-4 py-3 rounded-md hover:bg-blue-200"
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-6 text-sm text-gray-500">Question {current + 1} / {questions.length}</div>
    </div>
  );
}

export default Quiz;
