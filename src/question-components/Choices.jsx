import React from "react";

export const Choices = ({ choices, selectedChoice, setSelectedChoice, state }) => {
  const optionArray = ["A", "B", "C", "D"];

  function selectChoice(index) {
    const selected = choices[index];
    setSelectedChoice(selected);
    console.log(selected);
  }

  return (
    <div className="flex-col">
      {choices &&
        choices.map((choice, index) => {
          const isSelected = selectedChoice?.text === choice.text;
          const isCorrect = choice.isCorrect;
          const isIncorrect = !isCorrect && isSelected;
          const buttonClass = `
            choice-button
            ${isSelected ? "selected" : ""}
            ${state.isSubmitted && isCorrect ? "correct" : ""}
            ${state.isSubmitted && isIncorrect ? "incorrect" : ""}
          `.trim();

          return (
            <button key={index} className={buttonClass} onClick={() => selectChoice(index)} disabled={state.isSubmitted}>
              <span className="option">{optionArray[index]}</span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <p> {choice.text}</p>
                <p>
                  {state.isSubmitted && isIncorrect ? (
                    <img src="/img/wrong.svg" />
                  ) : state.isSubmitted && isCorrect ? (
                    <img src="/img/right.svg" />
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </button>
          );
        })}
    </div>
  );
};
