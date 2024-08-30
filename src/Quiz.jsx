import { useState } from "react";
import { Question } from "./question-components/Question";
import useLocalStorage from "./hooks/useLocalStorage";

export const Quiz = ({ questions, quizType, setQuizType }) => {
  const [index, setIndex] = useLocalStorage("questionIndex", 0);
  const [score, setScore] = useState(0);

  function nextQuestion() {
    setIndex((prev) => prev + 1);
  }
  function playAgain() {
    setQuizType("");
    setScore(0);
    setIndex(0);
    //window.location.reload(): Sayfanın tamamen yeniden yüklenmesini sağlar, tüm state sıfırlanır ve uygulama baştan başlar.
    //hic kullanici dostu degill!!

    // window.location.reload() Ne Yapar?
    // Sayfanın Yeniden Yüklenmesi:
    //Bu yöntem, tarayıcıya sayfayı yeniden yüklemesini söyler.
    //Bu işlem, mevcut JavaScript kodunun ve tüm React durumlarının sıfırlanmasını sağlar.
    // Performans:
    //Bu yöntem genellikle daha fazla kaynak kullanır ve uygulamanın yeniden yüklenmesi
    //daha uzun sürebilir. Ayrıca, tüm uygulamanın yeniden başlatılmasına yol açar, bu da bazı
    //kullanıcı verilerinin veya durumların kaybolmasına neden olabilir.
    // Kullanıcı Deneyimi:
    //Kullanıcı deneyimini olumsuz etkileyebilir çünkü sayfa yeniden yüklenir ve bu süreçte
    //sayfa beyaz bir ekran gösterebilir veya daha uzun bir yüklenme süresi yaşanabilir.
    //diger yontem de state güncelleme de ogrenince yaparsın
  }
  return (
    <div>
      {index < questions.length ? (
        <div>
          <Question
            nthQuestion={index + 1}
            nextQuestion={nextQuestion}
            question={questions[index]}
            score={score}
            setScore={setScore}
          />
        </div>
      ) : (
        <div className="scorePage">
          <div className="leftContent">
            Quiz completed <br /> <strong>You scored...</strong>
          </div>
          <div className="rightContent">
            <div className="scoreBox">
              <span className="quizType">
                <img src={"/img/" + quizType + ".svg"} alt="" />
                {quizType ? quizType.slice(0, 1).toUpperCase() + quizType.slice(1, quizType.length) : ""}
              </span>
              <div>
                <p className="score">{score}</p>
                <p style={{ width: "100%", color: "#626C7F", fontSize: "24px", fontWeight: "400", textAlign: "center" }}>
                  out of 10
                </p>
              </div>
            </div>
            <button onClick={() => playAgain()} className="playAgainBtn" type="button">
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
