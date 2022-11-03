import styled from "styled-components";
import { ReactComponent as LikeIcon } from "../../assets/like.svg";
import { ReactComponent as PipIcon } from "../../assets/library.svg";
import { ReactComponent as Repeatcha } from "../../assets/repeat.svg";
import { ReactComponent as Backcha } from "../../assets/back.svg";
import { ReactComponent as Playcha } from "../../assets/play.svg";
import { ReactComponent as Strelkacha } from "../../assets/strelka.svg";
import { ReactComponent as Icon1 } from "../../assets/footer-1.svg";
import { ReactComponent as Icon2 } from "../../assets/footer-2.svg";
import { ReactComponent as Icon3 } from "../../assets/footer-3.svg";

const Like = styled(LikeIcon)`
  width: 32px;
  :hover {
    cursor: pointer;
  }
`;
const Pip = styled(PipIcon)`
  width: 32px;
  :hover {
    cursor: pointer;
  }
`;
const Footer1 = styled(Icon1)`
  width: 32px;
  :hover {
    cursor: pointer;
  }
`;
const Footer2 = styled(Icon2)`
  width: 32px;
  :hover {
    cursor: pointer;
  }
`;
const Footer3 = styled(Icon3)`
  width: 32px;
  :hover {
    cursor: pointer;
  }
`;
const Back = styled(Backcha)`
  :hover {
    cursor: pointer;
  }
  width: 32px;
`;
const Play = styled(Playcha)`
  :hover {
    cursor: pointer;
  }
  width: 32px;
`;
const Strelka = styled(Strelkacha)`
  :hover {
    cursor: pointer;
  }
  width: 32px;
`;
const Repeat = styled(Repeatcha)`
  :hover {
    cursor: pointer;
  }
  width: 32px;
`;

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 93px;
  width: 100%;
  background: #181818;
  @media screen and (max-width: 850px) {
    .girl {
      display: none;
    }
    .footer-right {
      margin: 0;
    }
  }
`;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;

Container.Pretitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;

  opacity: 0.6;
`;

const PlayRoad = styled.div`
  width: 50vw;
  max-width: 673px;
  min-width: 200px;
  height: 5px;
  background: #b3b3b3;
  border-radius: 2.27344px;
`;

PlayRoad.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12.5039px;
  line-height: 18px;
  text-align: center;
  color: #b3b3b3;
  margin: 6px;
`;
const VoiceRoad = styled.div`
  width: 97px;
  height: 4px;
  background: #c4c4c4;
  border-radius: 38px;
`;

export {
  VoiceRoad,
  Container,
  Like,
  Pip,
  PlayRoad,
  Play,
  Back,
  Repeat,
  Strelka,
  Footer1,
  Footer2,
  Footer3,
};
