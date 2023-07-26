import React, { useState } from "react";
import TextInput from "./FormComponents/TextInput";
import EmailInput from "./FormComponents/EmailInput";
import TextArea from "./FormComponents/TextArea";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h4>Real Good!</h4>
        <p>I will be in touch soon.</p>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="contactForm"
    >
      <TextInput label="First Name" name="first-name" />
      <TextInput label="Last Name" name="last-name"  />
      <EmailInput label="Email" name="email" />
      <TextArea label="Your Message" name="message"  />
      <div className="submit">
        <button
          className="submit"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;