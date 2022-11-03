import styled from "styled-components";

const Container = styled.div`
  margin-left: 230px;
  height: 100vh;
  padding: 84px 0 93px 34px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 93px;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 22px;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Box = styled.div`
  width: 343px;
  height: 84px;
  display: flex;
  align-items: center;
  background: #181818;
  margin: 16px 26px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: #282828;
  }
`;

const Pretitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-left: 19px;
  color: #ffffff;
`;

const SecondTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #ffffff;
  margin-bottom: 20px;
`;

const BigBox = styled.div`
  width: 190px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  margin: 10px;
  border-radius: 4px;
`;

BigBox.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 22px;
  margin-bottom: 3px;
`;

BigBox.Pretitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #b3b3b3;
`;

export { Container, BigBox, Title, SecondTitle, HeaderBox, Box, Pretitle };
