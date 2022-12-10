import React, { useState } from "react";

import "../index.css";
import data from "../memesData.js";
import defaultIMG from "/memeimg.png";

function MainSection() {
  // breaking at 450px for 'bottom caption'
  const below450 = window.innerWidth < 450;

  const [memeObj, setMemeURL] = React.useState({
    memeImg: defaultIMG,
    topText: "Placeholder",
    bottomText: "Placeholder",
  });

  function getMemeURL() {
    const memesArray = data.data.memes;
    const randomNumInArray = Math.floor(
      Math.random() * (memesArray.length + 1)
    );
    // access the a random object in the array of memes and get the url key's value
    setMemeURL((oldObj) => ({
      ...oldObj,
      memeImg: memesArray[randomNumInArray].url,
    }));
  }

  function changeTextColor(e) {
    // getting color from the id name
    const color = e.target.id;
    const texts = document.querySelectorAll(".meme-text");
    texts.forEach((el) => {
      el.style.color = color;
    });
  }

  return (
    <>
      <section>
        <form>
          <input
            id="top-input"
            type="text"
            className="cap"
            placeholder={below450 ? "top" : "top caption"}
          />
          <input
            id="bottom-input"
            type="text"
            className="cap"
            placeholder={below450 ? "bottom" : "bottom caption"}
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
