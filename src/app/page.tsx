"use client";

import { QuestionItem } from "@/components/question-item";
import { questions } from "@/data/questions";
import { useState } from "react";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = () => {};

  return (
    <main className="w-full h-full">
      <h1 className="pt-16 pb-10 text-2xl tracking-wider text-center">QUIZZ</h1>

      <div className="max-w-96 p-4 m-auto border ">
        <QuestionItem
          question={questions[currentQuestion]}
          count={currentQuestion + 1}
          onAnswer={handleAnswer}
        />
        <button className="h-10 px-4 border bg-slate-400">enviar</button>
      </div>

      <p className="text-center pt-4">
        {currentQuestion + 1} de {questions.length} pergunta
        {questions.length > 1 && "s"}
      </p>
    </main>
  );
}
