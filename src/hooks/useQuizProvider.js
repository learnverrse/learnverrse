import { useContext } from 'react';
import { QuizContext } from '@/contexts/QuizProvider';

export const useQuizContext = () => useContext(QuizContext);
