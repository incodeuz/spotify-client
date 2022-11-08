import Jony from "../assets/jonyboss.jpg";
import ELMAN from "../assets/elmanchornaya.jpeg";
import Dualipa from "../assets/dualipa.png";
import Kulosa from "../assets/kulosaoxlade.jpeg";
import Underthe from "../assets/under.jpeg";

export const likedSongs = [
  {
    id: 1,
    isPlayed: true,
    avatar: Dualipa,
    title: "We’re Good",
    pretitle: "Dua Lipa",
    album: "Future Nostalgia (The Moonlight Edition)",
    date: `${new Date().getDate()}/${new Date().getMonth()}`,
    isLiked: false,
    minute: "3.17",
  },
  {
    id: 2,
    isPlayed: false,
    avatar: Jony,
    title: "Boss",
    pretitle: "JONY, Limba",
    album: "Boss",
    date: `${new Date().getDate()}/${new Date().getMonth()}`,
    isLiked: true,
    minute: "2.58",
  },
  {
    id: 3,
    isPlayed: false,
    avatar: Kulosa,
    title: "KU LO SA",
    pretitle: "Oxlade",
    album: "A COLORS SHOW",
    date: `${new Date().getDate()}/${new Date().getMonth()}`,
    isLiked: true,
    minute: "2.27",
  },
  {
    id: 4,
    isPlayed: false,
    avatar: ELMAN,
    title: "Chonraya Lyubov",
    pretitle: "ELMAN, MONA",
    album: "Chornyaya lyubov'",
    date: `${new Date().getDate()}/${new Date().getMonth()}`,
    isLiked: true,
    minute: "2.58",
  },
  {
    id: 5,
    isPlayed: true,
    avatar: Underthe,
    title: "Under The Influence",
    pretitle: "Chris Brown",
    album: "Indigo",
    date: `${new Date().getDate()}/${new Date().getMonth()}`,
    isLiked: false,
    minute: "3.04",
  },
];
