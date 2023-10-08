"use client";

import React, { useState } from "react";
import { Roboto } from "next/font/google";
import PrimaryButton from "../Button/PrimaryButton";
import { raiseToast } from "@/utils/utilityFuncs";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ContactFormInput = ({
  type,
  placeholder,
  label,
  name,
  handleChange,
  value,
  error,
}) => {
  return (
    <div
      className={`contact-form-input relative w-full min-h-[1px] px-4 ${roboto.className}`}
    >
      <p className="text-[var(--secondary-color)]">
        <label className="font-medium tracking-wider">{label}</label>
        <span className="inline-flex w-full relative mb-5 flex-col">
          <input
            type={type}
            className={`form-control h-14 ${error ? "border-red-600" : ""}`} // Add border-red-600 class on error
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            value={value}
          />
          {error && (
            <span className="text-red-600 mt-2 text-sm tracking-wider">
              {error}
            </span>
          )}
        </span>
      </p>
    </div>
  );
};

const ContactFormTextArea = ({
  type,
  placeholder,
  label,
  name,
  handleChange,
  value,
}) => {
  return (
    <div
      className={`contact-form-input relative w-full min-h-[1px] px-4 ${roboto.className}`}
    >
      <p className="text-[var(--secondary-color)]">
        <label className="font-medium tracking-wider">{label}</label>
        <span className="inline-flex w-full relative mb-5">
          <textarea
            type={type}
            className="form-control"
            placeholder={placeholder}
            rows={5}
            name={name}
            onChange={handleChange}
            value={value}
          ></textarea>
        </span>
      </p>
    </div>
  );
};

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    phone: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Name is required*";
    }

    // Simple email validation (you can use a more robust validation library)
    if (!formData.email || !formData.email.match(/\S+@\S+\.\S+/)) {
      validationErrors.email = "Invalid Email!";
    }

    // Update the errors state
    setErrors(validationErrors);

    // If there are validation errors, don't submit the form
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Continue with form submission
    try {
      // Send the form data to the serverless function
      const response = await fetch("/api/formtoemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          description: "",
          subject: "",
          phone: "",
        });
        raiseToast("success", "Form Submitted Successfully!!🤞");
        router.push("/");
      } else {
        raiseToast("error", "There was an error while submitting the form");
      }
    } catch (error) {
      raiseToast("error", "There was an error while submitting the form");
    }
  };

  return (
    <form
      method="POST"
      className="contact-form relative grid grid-cols-1 md:grid-cols-2"
    >
      <div>
        <ContactFormInput
          type={"text"}
          placeholder={"Enter your name"}
          label={"Your Name*"}
          name={"name"}
          handleChange={handleChange}
          value={formData.name}
          error={errors.name}
        />
      </div>
      <div>
        <ContactFormInput
          type={"email"}
          placeholder={"example@abc.com"}
          label={"Your Email"}
          name={"email"}
          handleChange={handleChange}
          value={formData.email}
          error={errors.email}
        />
      </div>
      <div>
        <ContactFormInput
          type={"text"}
          placeholder={"+00 0000 0000 00"}
          label={"Phone"}
          name={"phone"}
          handleChange={handleChange}
          value={formData.phone}
        />
      </div>
      <div>
        <ContactFormInput
          type={"text"}
          placeholder={"Enter your subject"}
          label={"Subject"}
          name={"subject"}
          handleChange={handleChange}
          value={formData.subject}
        />{" "}
      </div>
      <div className="col-span-1 md:col-span-2">
        <ContactFormTextArea
          type={"text"}
          placeholder={"Enter your message"}
          label={"Your Message"}
          name={"description"}
          handleChange={handleChange}
          value={formData.description}
        />
      </div>
      <div className="submit-button mx-2" onClick={handleSubmit}>
        <PrimaryButton text={"Send Message"} size="small" />
      </div>
    </form>
  );
};

export default ContactForm;
