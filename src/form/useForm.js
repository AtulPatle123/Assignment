import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  // setup state for multiple input fields
  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
  });
  // state for error messages
  const [errors, setErrors] = useState({});
  // state for submit validation
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handle change function for the controlled input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // handle submit form and setting up the Error state and form submit state
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // handling the submitForm / callback() function with the error dependency array
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      localStorage.setItem("TOKEN", JSON.stringify(values.email));
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
