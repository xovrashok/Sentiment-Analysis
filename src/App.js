import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Sentiment from "sentiment";
const sentiment = new Sentiment();

function App() {
  const [phrase, setphrase] = useState("");
  const [score, setscore] = useState(null);

  useEffect(() => {
    setscore(sentiment.analyze(phrase));
  }, [phrase]);
  return (
    <div className="main">
      <div className="main-container">
        <div className="heading">
          <div className="hamburger">
            <a href="#analysis" style={{ marginLeft: "15%" }}>
              <p>Analysis</p>
            </a>
            <a href="" style={{ marginLeft: "9%" }}>
              <p>About Us</p>
            </a>
          </div>
          <h3 className="text-heading">Sentiment Analysis</h3>
          <a href="#analysis">
            <div className="arrow-down" />
          </a>
        </div>
        <div className="under-heading" id="analysis">
          <p> Please enter your text in english for analysis </p>
          <input
            value={phrase}
            className="inputbox"
            onChange={(e) => setphrase(e.target.value)}
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
      </div>
    </div>
  );
}

export default App;
