import { useState, useEffect } from "react";
import "./ContributeProject.css";

const ContributeProject = () => {
  const [inputValue, setInputValue] = useState("");
  const [totalAmount, setTotalAmount] = useState("0");

  useEffect(() => {
    const delay = 1000;

    const timeoutId = setTimeout(() => {
      const newTotalAmount = calculateTotalAmount(inputValue);
      setTotalAmount(newTotalAmount);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const calculateTotalAmount = (value) => {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? 0 : 100 * numericValue;
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="form-container contributeProjectContainer">
        <div className="form-box form-button">
          <h1 className="formHead">Contribute</h1>
          <div className="form-input">
            <label htmlFor="">Number of trees</label>
            <input type="text" name="name" onChange={handleInputChange} />

            <p className="amount">Total = Rs.{totalAmount}/-</p>

            <button className="submit-button" onClick="">
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributeProject;
