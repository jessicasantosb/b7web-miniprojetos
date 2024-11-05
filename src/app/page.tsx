"use client";

import { useState } from "react";

import { QuestionItem } from "@/components/question-item";
import { Result } from "@/components/result";
import { questions } from "@/data/questions";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  return (
    <main className="w-full h-full p-2">
      <h1 className="pt-16 pb-10 text-2xl tracking-wider text-center">QUIZZ</h1>
      <div className="max-w-96 min-h-64 p-4 m-auto border">
        {!showResult && (
          <>
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
            <p className="text-center pt-4">
              {currentQuestion + 1} de {questions.length} pergunta
              {questions.length > 1 && "s"}
            </p>
          </>
        )}

        {showResult && (
          <>
            <Result questions={questions} answers={answers} />
            <button>Reiniciar</button>
          </>
        )}
      </div>
    </main>
  );
}
