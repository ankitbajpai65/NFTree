import React from "react";
import { useFormik } from "formik";
import { generateReportSchema } from "./ValidationSchema";
import { createProject } from "../../../api/projectApi";
import { useNavigate } from "react-router-dom";

const initialValues = {
    growthRate: "",
    co2Absorption: "",
    o2Emission: "",
    leafHealth: "",
    rootHealth: "",
};

const GenerateReport = () => {
    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: generateReportSchema,
        onSubmit: (values, { resetForm }) => {
            resetForm();
            values.user = sessionStorage.getItem("id");
            createProject(values);
            navigate("/ongoingProjects");
        },
    });

    const inputFields = [
        { name: "growthRate", placeholder: "Growth rate" },
        { name: "co2Absorption", placeholder: "CO2 absorption" },
        { name: "o2Emission", placeholder: "O2 emission" },
        { name: "leafHealth", placeholder: "Leaf health" },
        { name: "rootHealth", placeholder: "Root health" },
    ];

    return (
        <div className="form-container" style={{ height: "100%", marginTop: "60px" }}>
            <div className="form-box" style={{ margin: "35px 0px" }}>
                <h2 className="formHead">Generate Report</h2>
                <form className="form-input" onSubmit={handleSubmit}>
                    {inputFields.map((field) => (
                        <React.Fragment key={field.name}>
                            <input
                                type="text"
                                name={field.name}
                                placeholder={field.placeholder}
                                value={values[field.name]}
                                onChange={handleChange}
                            />
                            {errors[field.name] && touched[field.name] && (
                                <small>{errors[field.name]}</small>
                            )}
                        </React.Fragment>
                    ))}
                    <div className="form-button">
                        <button type="submit" className="submit-button">
                            Get Started
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GenerateReport;
