import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createTransaction } from "../../../../api/projectApi";
import { contributionSchema } from "../../../../ValidationSchema/ValidationSchema";
import "./ContributeProject.css";
import { useFormik } from "formik";

const ContributeProject = () => {
  const navigate = useNavigate();
  const state = useLocation();
  const { id, donation } = state.state;

  const initialValues = {
    amount: 0,
    trees_count: 0,
    email: "",
    name: "",
    project: id,
    user: sessionStorage.getItem("id"),
  };

  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contributionSchema,
      onSubmit: (values) => {
        createTransaction(values);
        navigate(-1);
      },
    });

  useEffect(() => {
    const delay = 1000;

    const timeoutId = setTimeout(() => {
      const newTotalAmount = donation * values["trees_count"];
      setFieldValue("amount", newTotalAmount);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [values["trees_count"]]);

  return (
    <>
      <div className="form-container contributeProjectContainer">
        <div className="form-box form-button">
          <h1 className="formHead">Contribute</h1>
          <div className="form-input">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, ""))
              }
              placeholder="Name"
            />
            {errors.name && touched.name ? <small>{errors.name}</small> : ""}

            <input
              type="text"
              name="trees_count"
              onChange={handleChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
              }
              placeholder="Number of Plants"
            />
            {errors.trees_count && touched.trees_count ? (
              <small>{errors.trees_count}</small>
            ) : (
              ""
            )}

            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && touched.email ? <small>{errors.email}</small> : ""}

            <input
              type="text"
              name="bitWallet"
              onChange={handleChange}
              placeholder="Bit Wallet Address"
            />

            <p className="amount">Total = Rs.{values["amount"]}/-</p>

            <button className="submit-button" onClick={handleSubmit}>
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributeProject;
