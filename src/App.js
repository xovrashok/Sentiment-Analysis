import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Sentiment from "sentiment";
const sentiment = new Sentiment();

function App() {
  const [phrase, setPhrase] = useState("");
  const [score, setScore] = useState(null);
  const [inputOne, setInputOne] = useState("");
    const [scoreSecond, setScoreSecond] = useState(null);

  useEffect(() => {
    setScore(sentiment.analyze(phrase));
  }, [phrase]);

    useEffect(() => {
        setScoreSecond(sentiment.analyze(inputOne));
    }, [inputOne]);

  return (
    <div className="main">
      <div className="main-container">
        <div className="heading">
          <div className="hamburger">
            <a href="#analysisText" style={{ marginLeft: "15%" }}>
              <p>Analysis text</p>
            </a>
            <a href="#analysisLink" style={{ marginLeft: "9%" }}>
              <p>Analysis Link</p>
            </a>
          </div>
          <h3 className="text-heading">Sentiment Analysis</h3>
          <a href="#analysisText">
            <div className="arrow-down" />
          </a>
        </div>
        <div className="under-heading" id="analysisText">
          <p> Please enter your text in english for analysis </p>
          <input
            value={phrase}
            className="inputbox"
            onChange={(e) => setPhrase(e.target.value)}
          />
        </div>

        <div className="img-container">
          {score ? (
            score.score === 0 ? (
              <p>This text is neutral</p>
            ) : score.score > 0 ? (
              <p>This text is: positive ({score.score})</p>
            ) : (
              <p>This text is: negative ({score.score})</p>
            )
          ) : (
            ""
          )}
        </div>
          <div className="under-heading" id="analysisLink">
          <p> Please insert a link to analyze the content of the site </p>
          <input
              value={inputOne}
              className="inputbox"
              onChange={(e) => setInputOne(e.target.value)}
          />
          </div>
          <div className="img-container">
              {scoreSecond ? (
                  scoreSecond.score === 0 ? (
                      <p>This text is neutral</p>
                  ) : scoreSecond.score > 0 ? (
                      <p>This text is: positive ({scoreSecond.score})</p>
                  ) : (
                      <p>This text is: negative ({scoreSecond.score})</p>
                  )
              ) : (
                  ""
              )}
          </div>
      </div>
    </div>
  );
}

export default App;
