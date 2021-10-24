import "./style.css";
import React, { useEffect, useState } from "react";
import useScrollPosition from "@react-hook/window-scroll";
import { useTranslation } from "react-i18next";
import Typed from "react-typed";
import Projects from "./projects.js";
import Footer from "./footer";
import Contact from "./contact";
import SelectLang from "./selectLang";
import {  useSelector } from "react-redux";

function Landing() {
  const [menu, setMenu] = useState(false);
  
  const scrollY = useScrollPosition(60);
  const { t, i18n } = useTranslation();
  const lang = useSelector(state => state.lang.value);
  document.body.dir = i18n.dir();
  function openInNewTab(url) {
    window.open(url, '_blank').focus();
   }
   
  useEffect(()=>{
    i18n.changeLanguage(lang);
  },[lang])
  return (
    
    <div>
      <div
        className={scrollY < 500 ? "scroll-up-btn" : "scroll-up-btn show"}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className={scrollY > 20 ? "navbar sticky" : "navbar"}>
        <div className="max-width">
          <div className="logo">
            <div
              className="lang"
              
            >
              <i style={
                i18n.dir() === "ltr"
                  ? { marginRight: "10px" }
                  : { marginLeft: "10px" }
              } className="fa fa-globe" aria-hidden="true"></i>
              
              <div className="text"><SelectLang/></div>
            </div>
          

            <div className="logo">
              <a href="#">
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
      {/* <!-- home section start --> */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1"> {t("Hello, my name is")}</div>
            <div className="text-2">{t("Mahioussi Brahim")} </div>
            <div className="text-3">
              {t("And I'm a")}
              <span className="typing">
                <Typed
                  strings={[t("Developer"), t("Designer"), t("Freelancer")]}
                  typeSpeed={100}
                  backSpeed={60}
                  loop
                />
                <br />
              </span>
            </div>
            <a href="#contact">{t("Hire me")}</a>
          </div>
        </div>
      </section>
      {/* <!-- about section start --> */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title " id={lang} >{t("About")}</h2>
          <div className="about-content">
            <div className="column left">
              <img src="images/profile-1.jpeg" alt="" />
            </div>
            <div className="column right">
              <div className="text">
                {t("am")}{" "}
                <span className="typing-2">
                  <Typed
                    strings={[t("Developer"), t("Designer"), t("Freelancer")]}
                    typeSpeed={100}
                    backSpeed={60}
                    loop
                  />
                </span>
              </div>
              <p>
              {t("what i know")}
              </p>

              <a href="./cv/cv.pdf"> {t("Download CV")}</a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- services section start --> */}
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title"id={lang}>{t("My services")}</h2>
          <div className="serv-content">
            <div className="card" >
              <div className="box">
                <i className="fas fa-paint-brush"></i>
                <div className="text">{t("Web Design")}</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div className="card" onClick={()=>{ openInNewTab("https://animated-payement-visa.mahioussi.com/")} }>
              <div className="box">
                <i className="fas fa-laptop "></i>
                <div className="text">{t("Web Dev")}</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <div className="text">{t("Apps Design")}</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                  quia sunt, quasi quo illo enim.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* <!-- skills section start --> */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title"id={lang}>{t("My skills")}</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">{t("My creative skills")}</div>
              <p>
               {t("what i know")}
              </p>
              <a href="#">{t("Read more")}</a>
            </div>
            <div className="column right">
              <div className="bars">
                <div className="info">
                  <span>HTML</span>
                  <span>90%</span>
                </div>
                <div className="line html"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>CSS</span>
                  <span>60%</span>
                </div>
                <div className="line css"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div className="line js"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>MongoDB</span>
                  <span>50%</span>
                </div>
                <div className="line php"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>C#</span>
                  <span>70%</span>
                </div>
                <div className="line mysql"></div>
              </div>
              <div className="bars">
                <div className="info">
                  <span>NodeJs</span>
                  <span>70%</span>
                </div>
                <div className="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- teams section start --> */}
      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title"id={lang}>{t("Projects")}</h2>          
           <Projects/>
         
        </div>
      </section>
      {/* <!-- contact section start --> */}
    <Contact lang={lang}/>
      {/* <!-- footer section start --> */}
            <Footer/>
    </div>
  );
}

export default Landing;
