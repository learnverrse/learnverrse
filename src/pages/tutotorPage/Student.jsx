import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { questionIcons } from '@/components/details';
import ButtonDash from '@/components/UI/ButtonDash';
import Button from '@/components/UI/Button';
import { useQuizContext } from '@/hooks/useQuizProvider';
import { useState } from 'react';
import { createNewQuestion } from '@/components/helperFunctions';

const Student = () => {
  const [open, setOpen] = useState(false);

  const {
    selectedWeek,
    setSelectedWeek,

    questionByWeek,
    setQuestionByWeek,
  } = useQuizContext();

  // This line fetches the questions for the selected week only
  const currentQuestions = questionByWeek[selectedWeek] || [];

  return (
    <div>
      <h2 className="mb-5">Professional Evaluation</h2>
      <div className="grid w-full! grid-cols-4 gap-4">
        {/* Sidebar */}
        <div className="col-span-1">
          <select
            name="courses"
            id="courses"
            className="word-brake w-full cursor-pointer py-4"
          >
            {[...Array(5)].map((_, i) => (
              <option key={i} value={`course-${i}`}>
                Data Analytics: Transforming Data into Actionable Insights
              </option>
            ))}
          </select>

          <h2>Weekly Events</h2>
          <div className="flex flex-col gap-2">
            {[...Array(8)].map((_, i) => {
              const week = i + 1;
              return (
                <ButtonDash
                  key={week}
                  label={`week ${week}`}
                  fun={() => {
                    setSelectedWeek(week);
                  }}
                  active={selectedWeek === week}
                />
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-3">
          <div className="flex justify-between px-8">
            <h2 className="font-inter text-2xl font-semibold">
              Week {selectedWeek}
            </h2>

            <Popover
              open={open}
              onOpenChange={setOpen}
              className="max-w-[110px]"
            >
              <PopoverTrigger>
                <p className="cursor-pointer text-2xl">+</p>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex flex-col gap-2">
                  {questionIcons.map(({ name, icon, type }, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setQuestionByWeek((prev) => {
                          const currentWeekQuestions = prev[selectedWeek] || [];
                          const newQuestion = createNewQuestion(
                            type,
                            currentWeekQuestions.length
                          );

                          return {
                            ...prev,
                            [selectedWeek]: [
                              ...currentWeekQuestions,
                              newQuestion,
                            ],
                          };
                        });
                        setOpen(false);
                      }}
                      className="flex w-full cursor-pointer items-center gap-2 border px-4 py-2 capitalize hover:bg-gray-300"
                    >
                      {icon}
                      {name}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* QUESTIONS */}
          <section className="scroll-container max-h-[60vh] space-y-4 p-4">
            {currentQuestions?.map((ques, index) =>
              ques.type === 'mcqs' ? (
                <div className="relative" key={index}>
                  <div className="mb-2 flex w-full items-center gap-2">
                    <p>{index + 1}</p>
                    <textarea
                      className="basis-[90%] resize-none border-b p-2 pt-6 outline-none"
                      value={ques.question}
                      onChange={(e) => {
                        setQuestionByWeek((prev) => {
                          const updated = [...(prev[selectedWeek] || [])];
                          updated[index] = {
                            ...updated[index],
                            question: e.target.value,
                          };

                          return { ...prev, [selectedWeek]: updated };
                        });
                      }}
                    ></textarea>
                  </div>

                  <ul className="space-y-2 ps-6">
                    {[...Array(4)].map((_, optIndex) => (
                      <li key={optIndex} className="flex items-start gap-2">
                        <span className="font-bold">
                          {String.fromCharCode(97 + optIndex)}.
                        </span>
                        <textarea
                          className="w-1/2 resize-none border-b px-2 py-0 outline-none"
                          value={ques.options[optIndex]}
                          onChange={(e) => {
                            setQuestionByWeek((prev) => {
                              const updatedWeek = [
                                ...(prev[selectedWeek] || []),
                              ];
                              const updatedOptions = [
                                ...updatedWeek[index].options,
                              ];
                              updatedOptions[optIndex] = e.target.value;
                              updatedWeek[index] = {
                                ...updatedWeek[index],
                                options: updatedOptions,
                              };

                              return { ...prev, [selectedWeek]: updatedWeek };
                            });
                          }}
                        ></textarea>
                      </li>
                    ))}
                  </ul>

                  <div className="absolute right-0 bottom-0 flex items-start gap-2">
                    <span className="font-bold">Option Answer:</span>
                    <textarea
                      className="w-1/2 resize-none border-b px-2 py-0 outline-none"
                      value={ques.answer}
                      onChange={(e) => {
                        setQuestionByWeek((prev) => {
                          const updated = [...(prev[selectedWeek] || [])];
                          updated[index] = {
                            ...updated[index],
                            answer: e.target.value,
                          };
                          return { ...prev, [selectedWeek]: updated };
                        });
                      }}
                    ></textarea>
                  </div>
                </div>
              ) : (
                <div key={index}>
                  <div className="mb-2 flex w-full items-center gap-2">
                    <p>{index + 1}</p>
                    <textarea
                      className="basis-[90%] resize-none border-b p-2 pt-6 outline-none"
                      placeholder="Question"
                      value={ques.question}
                      onChange={(e) => {
                        setQuestionByWeek((prev) => {
                          const updatedWeek = [...(prev[selectedWeek] || [])];

                          updatedWeek[index] = {
                            ...updatedWeek[index],
                            question: e.target.value,
                          };

                          return { ...prev, [selectedWeek]: updatedWeek };
                        });
                      }}
                    ></textarea>
                  </div>
                  <textarea
                    className="ms-4 mt-2 w-full resize-none border-b p-1 outline-none"
                    placeholder="Answer"
                    value={ques.answer}
                    onChange={(e) => {
                      setQuestionByWeek((prev) => {
                        const updatedWeek = [...(prev[selectedWeek] || [])];
                        updatedWeek[index] = {
                          ...updatedWeek[index],
                          answer: e.target.value,
                        };

                        return { ...prev, [selectedWeek]: updatedWeek };
                      });
                    }}
                  ></textarea>
                </div>
              )
            )}
          </section>

          <div className="mx-auto mt-10 w-fit">
            <Button label="Upload quiz" active={true} fun={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
