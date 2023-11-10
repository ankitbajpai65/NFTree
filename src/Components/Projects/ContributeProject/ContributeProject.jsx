import { useState,useEffect } from 'react';
import {
    Input,
    Button,
    Select,
    MenuItem
} from '@mui/material';
import "../ContributeProject/ContributeProject.css";

const ContributeProject = () => {
    const [inputValue, setInputValue] = useState('');
    const [totalAmount, setTotalAmount] = useState('0');

    useEffect(() => {
        const delay = 1000; // set your desired debounce delay in milliseconds

        const timeoutId = setTimeout(() => {
            // Perform the action you want to debounce here
            console.log('Performing debounce action with input value:', inputValue);

            // For example, update the total amount based on the input value
            const newTotalAmount = calculateTotalAmount(inputValue);
            setTotalAmount(newTotalAmount);
        }, delay);

        // Cleanup the timeout to avoid unnecessary side effects
        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    const calculateTotalAmount = (value) => {
        // Replace this with your logic to calculate the total amount based on the input value
        // For demonstration, let's assume the input is a number and the total is calculated as 100 * input value
        const numericValue = parseFloat(value);
        return isNaN(numericValue) ? 0 : 100 * numericValue;
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <div className="login-container contributeProjectContainer">
                <div className="login-box login-button">
                    <h1 className="formHead">Contribute</h1>
                    <div className="login-input">

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
