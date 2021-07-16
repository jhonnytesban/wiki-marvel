import React from "react";
import { Link as a } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h2>Encuentrame y sigue mis proyectos</h2>
        <a>
          <GitHubIcon fontSize="medium" />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-esteban-gal%C3%A1n-2110191b3/">
          <LinkedInIcon fontSize="medium" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
