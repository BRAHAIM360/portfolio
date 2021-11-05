import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useScrollPosition from "@react-hook/window-scroll";
import { useSelector } from "react-redux";
import SelectLang from "../selectLang";


function NavBar() {
  const scrollY = useScrollPosition(60);
  const { t, i18n } = useTranslation();
  const lang = useSelector(state => state.lang.value);
  document.body.dir = i18n.dir();
  const [menu, setMenu] = useState(false);

  useEffect(()=>{
    i18n.changeLanguage(lang);
  },[lang])
  return (
    <>
      <div
        className={scrollY < 500 ? "scroll-up-btn" : "scroll-up-btn show"}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className={scrollY > 20 ? "navbar sticky" : "navbar"}>
        <div className="max-width">
          <div className="logo">
            <div className="lang">
              <i
                style={
                  i18n.dir() === "ltr"
                    ? { marginRight: "10px" }
                    : { marginLeft: "10px" }
                }
                className="fa fa-globe"
                aria-hidden="true"
              ></i>

              <div className="text">
                <SelectLang />
              </div>
            </div>

            <div className="logo">
              <a href="/">
                Mahiou<span>ssi</span>
              </a>
            </div>
          </div>
          <ul className={menu ? "menu active" : "menu "}>
            <li>
              <a
                href="#home"
                className="menu-btn"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {t("Home")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="menu-btn"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {t("About")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="menu-btn"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {t("Services")}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="menu-btn"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {t("Skills")}
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="menu-btn"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {t("Projects")}
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="menu-btn"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {t("Contact")}
              </a>
            </li>
          </ul>
          <div
            className="menu-btn"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <i className={menu ? "fas fa-bars active " : "fas fa-bars "}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
