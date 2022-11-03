import React from "react";
import {
  Box,
  Container,
  HeaderBox,
  Pretitle,
  SecondTitle,
  Title,
} from "./style";
import Girl from "../../assets/girl.jpg";

const Home = () => {
  return (
    <Container>
      <Title>Good afternoon</Title>
      <HeaderBox>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
        <Box>
          <img src={Girl} alt="Devushkacha" width="84" />
          <Pretitle>Pop Right Now</Pretitle>
        </Box>
      </HeaderBox>
      <SecondTitle>Recently played</SecondTitle>
      <HeaderBox>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </HeaderBox>
    </Container>
  );
};

export default Home;
