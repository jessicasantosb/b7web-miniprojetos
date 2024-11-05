export type QuestionProps = {
  question: string;
  options: string[];
  answer: number;
};

export type QuestionItemProps = {
  question: QuestionProps;
  count: number;
  onAnswer: (answer: number) => void;
};
