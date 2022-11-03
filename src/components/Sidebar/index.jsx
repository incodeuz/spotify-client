import React from "react";
import { NavLink } from "react-router-dom";
import { mockData } from "../../utils/mock";
import Girl from "../../assets/girl.jpg";

import {
  Container,
  CreatePlaylistIcon,
  Div,
  LikedSongsIcon,
  Logo,
  SideNav,
} from "./style";

const Sidebar = () => {
  return (
    <Container>
      <Div>
        <Logo />
        <SideNav>
          {mockData.map((item) => (
            <NavLink className="link-box" to={item.to} key={item.id}>
              <SideNav.Box>
                <div>{item.icon}</div>
                <SideNav.Title>{item.title}</SideNav.Title>
              </SideNav.Box>
            </NavLink>
          ))}
        </SideNav>
        <SideNav.Heading>Playlists</SideNav.Heading>
        <SideNav>
          <NavLink className="link-box" to="/create-playlist">
            <SideNav.Box>
              <CreatePlaylistIcon />
              <SideNav.Title>Create Playlist</SideNav.Title>
            </SideNav.Box>
          </NavLink>
          <NavLink className="link-box" to="/liked-songs">
            <SideNav.Box>
              <LikedSongsIcon />
              <SideNav.Title>Liked Songs</SideNav.Title>
            </SideNav.Box>
          </NavLink>
        </SideNav>
      </Div>

      <img src={Girl} alt="" />
    </Container>
  );
};

export default Sidebar;
