import React from "react";

const PageIndicatorComponent = ({ questions, pageNum }) => {
  const determineClassName = index => {
    if (index < pageNum) {
      return "is-complete";
    } else if (index === pageNum) {
      return "is-current";
    } else {
      return "";
    }
  };
  return (
    <div>
      <ol className="ProgressBar">
        {questions.map((response, index) => (
          <li className={`ProgressBar-step ${determineClassName(index)}`}>
            <svg
              className="ProgressBar-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PageIndicatorComponent;
