import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from '@material-ui/icons/Mail';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <hr className="separate" />
        <h2 className="footer__title">Descubre y sigue mis proyectos</h2>
        <div className="container-social">
          <a className='social__icon' href="https://github.com/jhonnytesban">
            <GitHubIcon fontSize="medium" />
          </a>
          <a className='social__icon' href="https://www.linkedin.com/in/jonathan-esteban-gal%C3%A1n-2110191b3/">
            <LinkedInIcon fontSize="medium" />
          </a>
          <a className='social__icon' href="mailto:jonathanestebangalan@gmail.com">
            <MailIcon fontSize="medium" />
          </a>
        </div>
        <hr className="separate" />
        <p className="atribution">Datos proporcionados por Marvel. © 2014 Marvel</p>
      </footer>
    </>
  );
};

export default Footer;
