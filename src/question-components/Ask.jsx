import React from "react";

export const Ask = ({ ask, nthQuestion }) => {
  return (
    <div className="ask">
      <div>
        <div className="nthQuestion">Question {nthQuestion} of 10</div>
        {ask}
      </div>
      <input className="inputRange" type="range" value={nthQuestion} max={10} />
    </div>
  );
};
