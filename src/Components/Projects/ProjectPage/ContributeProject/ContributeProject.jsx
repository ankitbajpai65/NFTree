import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ContributeProject.css";

const ContributeProject = () => {
  const state = useLocation();
  const price = state.state;

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
    return isNaN(numericValue) ? 0 : price * numericValue;
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
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, ""))
              }
              placeholder="Name"
            />
            <input
              type="text"
              name="number"
              onChange={handleInputChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
              }
              placeholder="Number of Plants"
            />
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
              }
              placeholder="Email"
            />
            <input
              type="text"
              name="bitWallet"
              onChange={handleInputChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
              }
              placeholder="Bit Wallet Address"
            />

            <p className="amount">Total = Rs.{totalAmount}/-</p>

            <button className="submit-button">Donate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributeProject;
