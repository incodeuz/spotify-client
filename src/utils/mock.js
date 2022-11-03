import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as LibraryIcon } from "../assets/library.svg";

export const mockData = [
  {
    id: 1,
    to: "/",
    icon: <HomeIcon />,
    title: "Home",
  },
  {
    id: 2,
    to: "/search",
    icon: <SearchIcon />,
    title: "Search",
  },
  {
    id: 3,
    to: "/library",
    icon: <LibraryIcon />,
    title: "Your Library",
  },
];
