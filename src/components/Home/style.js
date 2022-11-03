import styled from "styled-components";

const Container = styled.div`
  padding: 84px 0 0 34px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 75%,
    rgba(136, 136, 136, 1) 100%
  );
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

export { Container, Title, SecondTitle, HeaderBox, Box, Pretitle };
