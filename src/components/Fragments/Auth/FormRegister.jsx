import Button from "../../Elements/Button/Index";
import { useState } from "react";
import { useFormik } from "formik";

import { registerValidation } from "../../../lib/authValidation";

const initialValues = {
  email: "",
  password: "",
};

const FormRegister = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: registerValidation,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://reqres.in/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Registration failed");
        }

        const data = await response.json();

        if (!data.token) {
          throw new Error("Token not found in response");
        }

        setErrorMessage("");
      } catch (error) {
        console.error("Registration error:", error.message);
        setErrorMessage("Registration failed. Please check your information.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full max-w-xs form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Type here"
          className="w-full max-w-xs input input-sm input-bordered"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <small>{formik.errors.email}</small>
        )}
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Type here"
          className="w-full max-w-xs input input-sm input-bordered"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <small>{formik.errors.password}</small>
        )}
      </div>
      {errorMessage && (
        <p className="mt-4 text-sm text-center text-red-500">{errorMessage}</p>
      )}
      <Button
        type="submit"
        classname="w-full mt-4 text-white bg-blue-600 text-md"
      >
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
