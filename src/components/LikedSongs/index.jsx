import React from "react";
import { Box, BoxContent, Container, TopWrapper } from "./style";
import Opahon from "../../assets/opahon.png";
import Play from "../../assets/thumb_play.svg";
import Heart from "../../assets/heart.svg";
import MoreBig from "../../assets/more_big.svg";
import { likedSongs } from "../../utils/likedSongs";
import isPlayed from "../../assets/isplayed.svg";

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
          <TopWrapper.Pretitle>DATE ADDED</TopWrapper.Pretitle>
        </Box>
        {likedSongs.map((val, index) => {
          return (
            <Box className="content-box">
              <BoxContent flex className="flex content">
                <div className="playIndex">
                  <Box.DataIndex className="index">{index + 1}</Box.DataIndex>
                  <img
                    width="14"
                    height="14"
                    className="isPlayed"
                    src={isPlayed}
                    alt=""
                  />
                </div>
                <img
                  style={{ marginLeft: "18px", marginRight: "16px" }}
                  width="40"
                  height="40"
                  src={val.avatar}
                  alt=""
                />
                <div>
                  <Box.DataTitle>{val.title}</Box.DataTitle>
                  <Box.DataPretitle>{val.pretitle}</Box.DataPretitle>
                </div>
              </BoxContent>
              <BoxContent flex>{val.minute}</BoxContent>
              <BoxContent>{val.date}</BoxContent>
            </Box>
          );
        })}
      </div>
    </Container>
  );
};

export default LikedSongs;
