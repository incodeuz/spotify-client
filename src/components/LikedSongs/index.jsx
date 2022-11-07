import React from "react";
import { Box, Container, TopWrapper } from "./style";
import Opahon from "../../assets/opahon.png";
import Play from "../../assets/thumb_play.svg";
import Heart from "../../assets/heart.svg";
import MoreBig from "../../assets/more_big.svg";

const LikedSongs = () => {
  return (
    <Container>
      <TopWrapper>
        <img src={Opahon} alt="" />
        <div className="flex-direction">
          <TopWrapper.Pretitle>PLAYLIST</TopWrapper.Pretitle>
          <TopWrapper.Title>Pop Right Now</TopWrapper.Title>
          <TopWrapper.Pretitle style={{ opacity: "0.7" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          </TopWrapper.Pretitle>
          <TopWrapper.Pretitle>
            <b>Spotify</b> 860,305 likes 100 songs, 5 hr 5 min
          </TopWrapper.Pretitle>
        </div>
      </TopWrapper>
      <div className="flex-direction section">
        <div className="flex gap">
          <img src={Play} alt="" />
          <img src={Heart} alt="" />
          <img src={MoreBig} alt="" />
        </div>
        <Box border>
          <TopWrapper.Pretitle flex># TITLE</TopWrapper.Pretitle>
          <TopWrapper.Pretitle flex>ALBUM</TopWrapper.Pretitle>
          <TopWrapper.Pretitle flex>DATE ADDED</TopWrapper.Pretitle>
        </Box>
      </div>
    </Container>
  );
};

export default LikedSongs;