import React, { useState } from "react";
import { Ask } from "./Ask";
import { Choices } from "./Choices";

export const Question = ({ question, nextQuestion, setScore, nthQuestion }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [choiceState, setChoiceState] = useState({ isCorrect: false, isSubmitted: false });

  function submitAnswer() {
    const isCorrect = selectedChoice && selectedChoice.isCorrect;
    setChoiceState({ isCorrect, isSubmitted: true });
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNextQuestion() {
    setChoiceState({ isCorrect: false, isSubmitted: false });
    nextQuestion();
    setSelectedChoice(null);
  }

  return (
    <div className="grid-container">
      <div>
        <Ask nthQuestion={nthQuestion} ask={question.ask} />
      </div>
      <div className="choices-content">
        <Choices
          choices={question.choices}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
          state={choiceState}
        />
        {choiceState.isSubmitted ? (
          <button className="submit-next-btn" onClick={handleNextQuestion}>
            Next Question
          </button>
        ) : (
          <button className="submit-next-btn" onClick={submitAnswer}>
            Submit Answer
          </button>
        )}
      </div>
    </div>
  );
};
