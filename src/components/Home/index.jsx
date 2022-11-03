import React from "react";
import {
  BigBox,
  Box,
  Container,
  HeaderBox,
  Pretitle,
  SecondTitle,
  Title,
} from "./style";
import { goodAfternoon, recentlyPlayed } from "../../utils/homeData";

const Home = () => {
  return (
    <Container>
      <Title>Good afternoon</Title>
      <HeaderBox>
        {goodAfternoon.map((value) => (
          <Box key={value.id}>
            <img
              style={{
                borderRadius: "4px",
              }}
              src={value.avatar}
              alt=""
              width="84"
            />
            <Pretitle>{value.title}</Pretitle>
          </Box>
        ))}
      </HeaderBox>
      <SecondTitle>Recently played</SecondTitle>
      <HeaderBox>
        {recentlyPlayed.map((value) => (
          <BigBox key={value.id} className="flex-direction">
            <img src={value.icon} alt="" width="158" />
            <BigBox.Title>{value.title}</BigBox.Title>
            <BigBox.Pretitle>{value.pretitle}</BigBox.Pretitle>
          </BigBox>
        ))}
      </HeaderBox>
      <SecondTitle>Just the Hits</SecondTitle>
      <HeaderBox>
        {recentlyPlayed.map((value) => (
          <BigBox key={value.id} className="flex-direction">
            <img src={value.icon} alt="" width="158" />
            <BigBox.Title>{value.title}</BigBox.Title>
            <BigBox.Pretitle>{value.pretitle}</BigBox.Pretitle>
          </BigBox>
        ))}
      </HeaderBox>
    </Container>
  );
};

export default Home;
