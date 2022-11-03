import React from "react";
import {
  Back,
  Container,
  Footer1,
  Footer2,
  Footer3,
  Like,
  Pip,
  Play,
  PlayRoad,
  Repeat,
  Strelka,
  VoiceRoad,
} from "./style";
import Girl from "../../assets/girl.jpg";

const Footer = () => {
  return (
    <Container>
      <div className="flex">
        <img className="girl" src={Girl} width="50" alt="" />
        <div
          className="footer-right"
          style={{
            marginLeft: "14px",
            marginRight: "17px",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Container.Title>Hold On</Container.Title>
          <Container.Pretitle>Justin Bieber</Container.Pretitle>
        </div>
        <div className="flex">
          <Like />
          <Pip />
        </div>
      </div>
      <div
        className="flex-direction"
        style={{ alignItems: "center", marginTop: "10px" }}
      >
        <div className="flex" style={{ gap: "19px" }}>
          <Strelka />
          <Back />
          <Play />
          <Back style={{ transform: "rotate(180deg)" }} />
          <Repeat />
        </div>
        <div className="flex">
          <PlayRoad.Title>0:00</PlayRoad.Title>
          <PlayRoad />
          <PlayRoad.Title>3:27</PlayRoad.Title>
        </div>
      </div>
      <div className="flex">
        <Footer1 />
        <Footer2 />
        <Footer3 />
        <VoiceRoad />
      </div>
    </Container>
  );
};

export default Footer;
