import { useState } from "react";
import "./App.css";
import { accessibilityQuestions, cssQuestions, jsQuestions, htmlQuestions } from "./data.js";
import { Quiz } from "./Quiz.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
function App() {
  const [quizType, setQuizType] = useLocalStorage("quizType", "");
  return (
    <>
      <div className="container">
        <header className="flex-row">
          <span className="quizType">
            <img src={"/img/" + quizType + ".svg"} alt="" />
            {quizType ? quizType.slice(0, 1).toUpperCase() + quizType.slice(1, quizType.length) : ""}
          </span>
          <span>
            <div className="theme">
              <label>
                <img src="./img/light-theme.svg" alt="" />
              </label>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
              <label>
                <img src="./img/dark-theme.svg" alt="" />
              </label>
            </div>
          </span>
        </header>
        {quizType === "" ? (
          <div className="grid-container">
            <div className="left-content">
              <div className="heading-l">
                Welcome to the <br /> <strong>Frontend Quiz</strong>
              </div>
              <div className="body-s">Pick a subject to get started.</div>
            </div>
            <div className="flex-col">
              <button onClick={() => setQuizType("html")}>
                <img src="./img/html.svg" alt="html-icon" /> HTML
              </button>
              <button onClick={() => setQuizType("css")}>
                <img src="./img/css.svg" alt="css-icon" /> CSS
              </button>
              <button onClick={() => setQuizType("javascript")}>
                <img src="./img/javascript.svg" alt="js-icon" /> Javascript
              </button>
              <button onClick={() => setQuizType("accessibility")}>
                <img src="./img/accessibility.svg" alt="ac-icon" /> Accessibility
              </button>
            </div>
          </div>
        ) : (
          <div>
            {quizType === "html" && <Quiz setQuizType={setQuizType} quizType={quizType} questions={htmlQuestions} />}
            {quizType === "css" && <Quiz setQuizType={setQuizType} quizType={quizType} questions={cssQuestions} />}
            {quizType === "javascript" && <Quiz setQuizType={setQuizType} quizType={quizType} questions={jsQuestions} />}
            {quizType === "accessibility" && (
              <Quiz setQuizType={setQuizType} quizType={quizType} questions={accessibilityQuestions} />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
