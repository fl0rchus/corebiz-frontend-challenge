import React from "react";
import useForm from "../../helpers/useForm";
import validate from "../../helpers/validateInfo";

export const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form className="newsletter__form" onSubmit={handleSubmit}>
      <h3 className="newsletter__title">
        Participe de nossas news com promoções e novidades!
      </h3>
      <div className="newsletter-group">
        <input
          onChange={handleChange}
          value={values.name}
          type="text"
          name="name"
          placeholder="Digite seu nome"
          className="newsletter__input"
        />
        {errors.name && <p className="newsletter__error">{errors.name}</p>}
        <input
          onChange={handleChange}
          value={values.email}
          type="email"
          name="email"
          placeholder="Digite seu email"
          className="newsletter__input"
        />
        {errors.email && <p className="newsletter__error">{errors.email}</p>}
      </div>
      <button type="submit" className="btn newsletter__btn">
        Eu quero!
      </button>
    </form>
  );
};
