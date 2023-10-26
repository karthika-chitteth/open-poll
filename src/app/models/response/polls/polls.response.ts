export interface CreatePollResponse {
  id: number;
  title: string;
  isActive: boolean;
  userId: number;
  questions: Questions[];
}
interface Questions {
  pollId: number;
  title: string;
  questionType: string;
  options: OptionsPayload[];
}
interface OptionsPayload {
  title: string;
  questionId: number;
}

export interface PublishPollResponse {
  id: number;
  title: string;
  isActive: boolean;
  userId: number;
  uniqueId: string;
  questions: Questions[];
}
export interface PollVoteResponse {
  id: number;
  pollId: number;
  title: string;
  answers: Answers[];
}
export interface Answers {
  questionId: number;
  title: string;
  questionType: number;
  textAnswers: string;
  multipleChoiceAnswers: Options[];
}
export interface Options {
  optionId: number;
  title: string;
  total: number;
}
export interface PollQuestionResponse {
  id: number;
  title: string;
  isActive: boolean;
  questions: Questions[];
}
