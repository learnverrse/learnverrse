// for state toggle

export const toggleState = (setterFn) => {
  setterFn((prev) => !prev);
};

export const createNewQuestion = (type, currentLength) => {
  const base = {
    id: currentLength + 1,
    type,
    question: '',
    answer: '',
  };

  if (type === 'mcqs') {
    return {
      ...base,
      options: ['', '', '', ''],
    };
  }

  return base;
};
