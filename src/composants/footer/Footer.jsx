import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="contenair-footer">
          <div className="infos-delphine">
            <h3 className="identites2">Delphine Le Huu</h3>
            <h4 className="phone2">06 13 75 48 86</h4>
            <h4 className="email2">contact@delphinelehuu.fr</h4>
          </div>
          
          <div className="details2">
            <p className="para-b-e">
              © Le Bien-être par le Feng Shui - 2020 - Tous droits réservés{" "}
            </p>
          </div>

          <div className="reseaux-sociaux">
            <ul className="pied-page">
              <li>
                <Link>
                  <AiOutlineInstagram size={20} style={{ color: "white" }} />
                </Link>
              </li>
              <li>
                <Link>
                  <SlSocialLinkedin size={20} style={{ color: "white" }} />
                </Link>
              </li>
              <li>
                <Link>
                  <FiFacebook size={20} style={{ color: "white" }} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaPinterestP size={20} style={{ color: "white" }} />
                </Link>
              </li>
            </ul>

          </div>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;
