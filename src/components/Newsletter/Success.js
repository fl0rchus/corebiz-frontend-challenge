import React, { useState } from "react";

const Success = () => {
  return (
    <div className="newsletter__success">
      <p className="success__title">Seu e-mail foi cadastrado com sucesso!</p>
      <p className="success__text">
        A partir de agora você receberá as novidade e ofertas exclusivas.
      </p>
      <button className="btn btn-newsletter">Cadastrar novo e-mail</button>
    </div>
  );
};

export default Success;
