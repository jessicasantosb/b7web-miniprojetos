import { ResultProps } from "@/types";

export function Result({ questions, answers }: ResultProps) {
  return (
    <div>
      {questions.map(({ question, options, answer }, key) => {
        const rigthAnswer = answer === answers[key];

        return (
          <div key={key} className="pb-4">
            <h4 className="font-bold">
              {key + 1}. {question}{" "}
            </h4>
            <p>
              <span className={rigthAnswer ? "text-green-700" : "text-red-700"}>
                {rigthAnswer ? "Acertou!" : "Errou!"} -{" "}
              </span>
              {options[answer]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
