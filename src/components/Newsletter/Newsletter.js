import React, { useState } from "react";
import { Form } from "./Form";
import Success from "./Success";

const Newsletter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <section className="newsletter">
      {!isSubmitted ? <Form submitForm={submitForm} /> : <Success />}
    </section>
  );
};

export default Newsletter;
