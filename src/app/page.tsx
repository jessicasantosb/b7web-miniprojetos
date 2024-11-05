"use client";

import { questions } from "@/data/questions";

export default function Home() {
  const handleChange = () => {};

  return (
    <main className="w-full h-full">
      <h1 className="pt-16 pb-10 text-2xl tracking-wider text-center">QUIZZ</h1>

      <div className="max-w-96 p-4 m-auto border ">
        {questions.map(({ question, options }, index) => {
          return (
            <div key={question} className="pb-6">
              <h3 className="pb-2">{question}</h3>

              {options.map((option) => {
                return (
                  <div key={option}>
                    <label className="flex gap-2">
                      <input
                        type="radio"
                        name={(index + 1).toString()}
                        value={option}
                        onChange={handleChange}
                        />
                        {option}
                    </label>
                  </div>
                );
              })}
            </div>
          );
        })}

        <button className="h-10 px-4 border bg-slate-400">enviar</button>
      </div>
    </main>
  );
}
