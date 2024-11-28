import { useState } from "react";
import question_profile from "../assets/question_profile.png";
import stratergy from "../assets/toggles.svg";
import Soluiton from "./Solution";
import "./page.css";
const Question = () => {
  const [showElement, setShowElement] = useState(false);
  return (
    <div className="main">
      <div className="card text-left">
        <div className="card-body">
          <h4 className="question-header">
            1 x 1 x 4 Bricks into a 6 x 6 x 6 box?
          </h4>
          <ul className="que-info">
            <li className="type-strategy">
              <img src={stratergy} />
              Strategy
            </li>
            <li className="difficuly-med">Medium</li>
          </ul>
          <p className="card-text">
            The challenge is to determine whether 53 bricks of size 1×1×41×1×4
            can fit into a 6×6×66×6×6 cube without overlap or extending beyond
            the boundaries.
          </p>
        </div>
        <img src={question_profile} className="logo " alt="question profile" />
      </div>
      <div className="solution_button">
        <button className="button" onClick={() => setShowElement(!showElement)}>
          {showElement ? "Hide Solution" : "Show Solution "}
        </button>
      </div>
      <div className="solution">{showElement ? <Soluiton /> : null}</div>
    </div>
  );
};
export default Question;
