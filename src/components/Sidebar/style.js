import styled from "styled-components";
import { ReactComponent as Logotip } from "../../assets/logo.svg";
import { ReactComponent as CreatePlaylist } from "../../assets/playlist.svg";
import { ReactComponent as LikedSongs } from "../../assets/liked.svg";
import { ReactComponent as LikeIcon } from "../../assets/like.svg";
import { ReactComponent as PipIcon } from "../../assets/library.svg";
const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  height: calc(100% - 93px);
  background: #000000;
  padding: 20px 0 0 0;
  margin-bottom: 93px;
  .active {
    background: #282828;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    opacity: 1;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled(Logotip)`
  width: 129px;
  margin-left: 25px;
  margin-bottom: 25px;
`;
const CreatePlaylistIcon = styled(CreatePlaylist)`
  width: 32px;
`;
const LikedSongsIcon = styled(LikedSongs)`
  width: 32px;
`;
const Like = styled(LikeIcon)`
  width: 32px;
`;
const Pip = styled(PipIcon)`
  width: 32px;
`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  margin-bottom: 24px;
`;

SideNav.Box = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  &:hover {
    background: #282828;
    border-radius: 4px;
    cursor: pointer;
  }
`;

SideNav.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  opacity: 0.7;
  margin-left: 16px;
`;

SideNav.Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #b3b3b3;
  margin-top: 25px;
  margin-bottom: 12px;
  margin-left: 25px;
`;

export {
  Container,
  Div,
  Logo,
  LikedSongsIcon,
  SideNav,
  CreatePlaylistIcon,
  Like,
  Pip,
};
