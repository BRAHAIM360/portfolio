import React from 'react'
import { useTranslation } from 'react-i18next';
import "./style.css";
function Footer() {
    const { t, i18n } = useTranslation();
    
   function openInNewTab(url) {
    window.open(url, '_blank').focus();
   }
   

    return (
        <footer>
        <span>
                
<section className="footer">


<div className="wrapper share">
         <div onClick={()=>openInNewTab("https://web.facebook.com/brahim.madrido/")} className="button">
            <div className="icon">
               <i className="fab fa-facebook-f"></i>
            </div>
            <span>Facebook</span>
         </div>
         <div className="button"  onClick={()=>openInNewTab("https://twitter.com/Aek360")}>
            <div className="icon">
               <i className="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
         </div>
         <div className="button"  onClick={()=>openInNewTab("https://www.instagram.com/brahim.360/")}>
            <div className="icon">
               <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
         </div>
         <div className="button"  onClick={()=>openInNewTab("https://www.linkedin.com/in/brahim-mahioussi-4b2920111/")}>
            <div className="icon">
               <i className="fab fa-linkedin" ></i>
            </div>
            <span>Linkedin</span>
         </div>
         <div className="button"  onClick={()=>openInNewTab("https://www.youtube.com/channel/UChzCBkBgOQbyVwNvdvkhUEg")}>
            <div className="icon">
               <i className="fab fa-youtube"></i>
            </div>
            <span>YouTube</span>
         </div>
         </div> 
</section>

          {t("Created By")}
          <a href="https://www.mahioussi.com">
            {" "}
            {t("Mahioussi Brahim")}
          </a> | <span className="far fa-copyright"></span>{" "}
          {t("2021 All rights")}
        </span>
      </footer>
    )
}

export default Footer
