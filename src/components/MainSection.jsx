import "../index.css";
import defaultIMG from "/memeimg.png";

function MainSection() {
  return (
    <>
      <section>
        <form>
          <input id="top-input" type="text" placeholder="top caption" />
          <input id="bottom-input" type="text" placeholder="bottom caption" />
        </form>

        <button id="create-btn" type="button">
          Get a new meme image 🖼️
        </button>
      </section>

      <div className="pic-div">
        <img src={defaultIMG} id="meme-render" alt="meme background" />
        <h2 className="meme-text" id="text-top">
          Placeholder
        </h2>
        <h2 className="meme-text" id="text-bottom">
          Placeholder
        </h2>
      </div>
    </>
  );
}

export default MainSection;
