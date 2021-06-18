import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  // destructuring properties from the useForm coustom hook
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Get started with us today! Login Here</h1>

        {/* Email field */}
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            autoComplete="on"
          />

          {/* error message */}
          {errors.email && <p>{errors.email}</p>}
        </div>

        {/* password field */}
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            autoComplete="on"
          />

          {/* error message */}
          {errors.password && <p>{errors.password}</p>}
        </div>

        {/* confirm password field */}
        <div className="form-inputs">
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
            autoComplete="on"
          />

          {/* error message */}
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
