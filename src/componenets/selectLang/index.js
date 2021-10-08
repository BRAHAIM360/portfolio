import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLang } from "../../Redux/features/langSlice";
import "./style.css";
function SelectLang() {
  const [active, setActive] = useState(false);
  const [selectLang, setSelectLang] = useState("en");
  const dispatch = useDispatch();

  const updateLang = (lng) => {
    dispatch(changeLang(lng));
    setSelectLang(lng);
    setActive(false);
  };

  return (
    <div
      className={active ? "lang-menu active " : "lang-menu "}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={`selected-lang ${selectLang}`}
        onClick={() => setActive(!active)}
      ></div>
      <ul
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        style={document.body.dir === "rtl" ? { left: "60px" } : {}}
      >
        <li>
          <a className="ar" onClick={() => updateLang("ar")}></a>
        </li>

        <li>
          <a className="en" onClick={() => updateLang("en")}></a>
        </li>
        <li>
          <a className="fr" onClick={() => updateLang("fr")}></a>
        </li>
        <li>
          <a className="de" onClick={() => updateLang("de")}></a>
        </li>
      </ul>
    </div>
  );
}

export default SelectLang;
