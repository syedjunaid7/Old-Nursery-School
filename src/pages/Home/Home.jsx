import React from "react";
import HeroSection from "../../components/Header/Hero/HeroSection";
import Main from "../../components/Main Section/Main";
import watsappLogo from "../../assets/images/watsapp-logo.png"
import whatsappLink from "../../assets/Links/whatsappLink"
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Main />
      <img className="watsapp" src={watsappLogo} onClick={whatsappLink} />
    </div>
  );
}
