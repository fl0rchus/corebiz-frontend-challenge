import React from "react";
import { FooterContactItem } from "./FooterContactItem";
import EmailIcon from "../../assets/email.svg";
import CallIcon from "../../assets/call.svg";
import Corebiz from "../../assets/corebiz-logo-footer.svg";
import Vtex from "../../assets/vtex-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="footer__title">Localização</p>
        <hr />
        <p className="footer__info">
          Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
          Alphavile SP <br />
          brasil@corebiz.ag <br />
          +55 11 3090 1039
        </p>
      </div>
      <div className="footer__contact">
        <FooterContactItem
          text="ENTRE EM CONTATO"
          icon={EmailIcon}
          alt="Email"
        />
        <FooterContactItem
          text="FALE COM O NOSSO CONSULTOR ONLINE"
          icon={CallIcon}
          alt="Call"
        />
      </div>
      <div className="footer__logos">
        <div className="footer__logos-corebiz">
          <small>Created by</small>
          <a href="#" target="_blank">
            <img src={Corebiz} alt="Corebiz" />
          </a>
        </div>
        <div className="footer__logos-vtex">
          <a href="#" target="_blank">
            <img src={Vtex} alt="VTEX" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
