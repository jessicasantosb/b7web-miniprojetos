import { QuestionItemProps } from "@/types/question";
import { useState } from "react";

export function QuestionItem({ question, count, onAnswer }: QuestionItemProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    if (key === null) {
      setSelectedAnswer(key);
      onAnswer(key);
    }
  };
  return (
    <div className="pb-6">
      <h3 className="pb-2">
        {count}. {question.question}
      </h3>

      {question.options.map((option, key) => {
        return (
          <div key={key}>
            <label className="flex gap-2">
              <input
                type="radio"
                name={question.question}
                value={option}
                onChange={() => checkQuestion(key)}
              />
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
}
