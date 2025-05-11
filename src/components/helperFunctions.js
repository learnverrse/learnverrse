// for state toggle

export const toggleState = (setterFn) => {
  setterFn((prev) => !prev);
};
