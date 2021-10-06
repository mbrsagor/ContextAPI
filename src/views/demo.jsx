import React, { useState } from "react";

export const Demo = () => {
  const [getNumber, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(getNumber + 1);
  };

  const decrementNumber = () => {
      setNumber(getNumber - 1);
  }

  const defaultNumber = () => {
      setNumber(0)
  }

  return (
    <div className="card">
      <div className="card-header">
            <h4 className="card-title">Counter only UseState</h4>
      </div>
      <div className="card-body">
        <h3>{getNumber}</h3>
        <button onClick={incrementNumber} className="btn btn-success btn-sm mr-2">
          Add
        </button>
        <button onClick={decrementNumber} className="btn btn-success btn-sm mr-2">
          Minus
        </button>
        <button onClick={defaultNumber} className="btn btn-info btn-sm mr-2">
          Default
        </button>
      </div>
    </div>
  );
};
