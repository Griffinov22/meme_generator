import React, { useState, useEffect } from "react";

import "../index.css";
import defaultIMG from "/memeimg.png";

function MainSection() {
  // breaking at 450px for 'bottom caption'
  const below450 = window.innerWidth < 450;

  const [memeObj, setMemeObj] = React.useState({
    memeImg: defaultIMG,
    topText: "Placeholder",
    bottomText: "Placeholder",
  });
  const [allMemes, setMemes] = React.useState([]);

  function getMemeURL() {
    //allMemes = [{...},{...},{...}]
    const randomNumInArray = Math.floor(Math.random() * (allMemes.length + 1));
    // access the a random object in the array of memes and get the url key's value
    setMemeObj((oldObj) => ({
      ...oldObj,
      memeImg: allMemes[randomNumInArray].url,
    }));
  }

  useEffect(() => {
    // Only called once because it returns an array of 100 memes

    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((apiRes) => setMemes(apiRes.data.memes));
  }, []);

  function changeTextColor(e) {
    // getting color from the id name
    const color = e.target.id;
    const texts = document.querySelectorAll(".meme-text");
    texts.forEach((el) => {
      el.style.color = color;
      // changes outline of text if the text is black
      el.style["-webkit-text-stroke"] =
        color === "black" ? "1px white" : "1px black";
    });
  }

  function holdCap(e) {
    //either 'top-input' or 'bottom-input'
    const { name, value } = e.target;

    setMemeObj((oldObj) => ({ ...oldObj, [name]: value }));
  }

  return (
    <>
      <section>
        <form>
          <input
            id="top-input"
            type="text"
            className="caption-input"
            placeholder={below450 ? "top" : "top caption"}
            name="topText"
            onChange={holdCap}
          />
          <input
            id="bottom-input"
            type="text"
            className="caption-input"
            placeholder={below450 ? "bottom" : "bottom caption"}
            name="bottomText"
            onChange={holdCap}
          />
        </form>

        <div className="clr-chng-div">
          <button className="clr-btn" id="red" onClick={changeTextColor}>
            Red
          </button>
          <button className="clr-btn" id="green" onClick={changeTextColor}>
            Green
          </button>
          <button className="clr-btn" id="blue" onClick={changeTextColor}>
            Blue
          </button>
          <button className="clr-btn" id="black" onClick={changeTextColor}>
            Black
          </button>
          <button className="clr-btn" id="white" onClick={changeTextColor}>
            White
          </button>
        </div>

        <button id="create-btn" type="button" onClick={getMemeURL}>
          Get a new meme image 🖼️
        </button>
      </section>

      <div className="pic-div">
        <img src={memeObj.memeImg} id="meme-render" alt="meme background" />
        <h2 className="meme-text" id="text-top">
          {memeObj.topText}
        </h2>
        <h2 className="meme-text" id="text-bottom">
          {memeObj.bottomText}
        </h2>
      </div>
    </>
  );
}

export default MainSection;
