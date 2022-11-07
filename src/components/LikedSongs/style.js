import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 230px;
  flex-grow: 1;
  .section {
    padding: 25px 0 0 35px;
  }
  .gap {
    gap: 25px;
    margin-bottom: 20px;
  }
`;

const TopWrapper = styled.div`
  padding: 145px 0 0 35px;
  display: flex;
  align-items: center;
  background-color: #43504e;
`;

TopWrapper.Pretitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 6px;
  flex: ${({ flex }) => (flex ? "1" : "0")};
`;

TopWrapper.Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 90px;
  line-height: 114px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Box = styled.div`
  margin: 0 21px 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ border }) => (border ? "1px solid gray" : "none")};
`;

export { Container, TopWrapper, Box };
