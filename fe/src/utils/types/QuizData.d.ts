export default interface QuizData {
  id: string;
  title: string;
  content: {
    question: string;
    answers: {
      answer: string;
      is_correct: boolean;
    }[];
  }[];
  level: number;
  created_at: string;
  updated_at: string;
}
