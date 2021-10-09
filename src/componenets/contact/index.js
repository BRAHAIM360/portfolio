import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import emailjs,{ init } from "emailjs-com";
import { Alert, Snackbar } from "@mui/material";

function Contact({lang}) {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = React.useState(false);
init("user_fXiy5qGoXw70qdNvyVMoQ");

const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    } 
    setOpen(false);};

  

  const sendEmail = (e) => {
     
    e.preventDefault();
      emailjs.send("service_kaeb0mm","template_8rvoka8",{
        from_name: "test",
        to_name: "brahim",
        message,
        reply_to: "brahim.real.360@hotmail.fr",
        email,
        subject
        ,
        }).then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setOpen(true)
              })
              .catch((err) => {
                console.log("FAILED...", err);
              });;
   
 
  };

  return (
    //   {/* <!-- contact section start --> */}
    <section className="contact" id="contact">
          <Snackbar  open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {t("your message have been sent")}
        </Alert>
      </Snackbar>
    
  
      <div className="max-width">
        <h2 className="title" id={lang}>{t("Contact me")}</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">{t("Get in Touch")}</div>
            <p>{t("contactMe")}</p>
            <div className="icons">
              <div className="row">
                <i
                  className="fas fa-user"
                  style={i18n.dir() === "rtl" ? { marginLeft: "20px" } : {}}
                ></i>
                <div className="info">
                  <div className="head">{t("Name")} </div>
                  <div className="sub-title">{t("Mahioussi Brahim")} </div>
                </div>
              </div>
              <div className="row">
                <i
                  className="fas fa-map-marker-alt"
                  style={i18n.dir() === "rtl" ? { marginLeft: "20px" } : {}}
                ></i>
                <div className="info">
                  <div className="head"> {t("Address")}</div>
                  <div className="sub-title">
                    {" "}
                    {t("Rue Benhalfya Lakhder port 57 Benfreha ,Oran")}
                  </div>
                </div>
              </div>
              <div className="row">
                <i
                  className="fas fa-envelope"
                  style={i18n.dir() === "rtl" ? { marginLeft: "20px" } : {}}
                ></i>
                <div className="info">
                  <div className="head"> {t("Email")}</div>
                  <div className="sub-title">contact@mahioussi.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">{t("Message me")}</div>
            <form onSubmit={(e)=>sendEmail(e)}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    required
                    on
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  required
                  onChange={(e) => setsubject(e.target.value)}
                />
              </div>
              <div className="field textarea">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit" >
                  {t("Send message")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
