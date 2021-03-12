import React from "react";

export const Form = () => {
  return (
    <form className="form-newsletter">
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        className="form-input"
      />
      <input
        type="text"
        name="email"
        placeholder="Digite seu email"
        className="form-input"
      />
      <button type="submit" className="btn form-btn">
        Eu quero!
      </button>
    </form>
  );
};
