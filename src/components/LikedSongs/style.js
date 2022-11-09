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
  .isPlayed {
    display: none;
  }
  .content-box:hover {
    .isPlayed {
      display: block;
    }
    .index {
      display: none;
    }
    background-color: #232625;
    border-radius: 5px;
  }
  .playIndex {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
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
  padding: 5px 5px;
  margin: 0 21px 0 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ border }) => (border ? "1px solid gray" : "none")};
  :hover {
    cursor: pointer;
  }
`;

Box.DataTitle = styled.div``;

Box.DataIndex = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
`;

Box.DataIsPlayed = styled.img`
  margin-right: 18px;
`;

Box.DataTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
`;

Box.DataPretitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px; 
  color: #ffffff;
  opacity: 0.7;
  margin-top: 3px;
`;

const BoxContent = styled.div`
  flex: ${({ flex }) => (flex ? "1" : "0")};
`;

export { Container, TopWrapper, Box, BoxContent }; 