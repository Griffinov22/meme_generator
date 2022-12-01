import React from "react";
import "../index.css";
import memeIMG from "/Troll_Face.png";

export default function Header() {
  return (
    <nav className="nav">
      <img id="nav-img" src={memeIMG} alt="meme image" />
      <h1 id="title">Meme Generator</h1>
      <h3 id="title-explanation">React Course - Project 3</h3>
    </nav>
  );
}
