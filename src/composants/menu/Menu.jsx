import React, { useState } from "react";
import "./Menu.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="header">
        <nav className="navbar">
          <div className="logo">
            <a href="/" className="mon-logo">
            Le Bien-être <br />par le <br />Feng shui
            </a>
          </div>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "blue" }} />
            ) : (
              <FaBars size={30} style={{ color: "blue" }} />
            )}
          </div>
          
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" onClick={closeMenu}>
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/livret" onClick={closeMenu}>
                Le livret
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/atelier" onClick={closeMenu}>
                Atelier
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/consultation" onClick={closeMenu}>
                Consultation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/qui" onClick={closeMenu}>
                Qui-suis-je?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
          
        </nav>
        <div className="horaires">
            <p className="texte-horaires">
              Delphine Lehuu 7 bd Victor Hugo 78300 Poissy 06 13 75 48 86
              Disponible du lundi au samedi de 9h à 20h.
            </p>
          </div>
      </div>
    </>
  );
}

export default Menu;
