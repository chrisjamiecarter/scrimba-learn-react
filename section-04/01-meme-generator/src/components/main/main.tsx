import { ChangeEvent, useState } from "react";

type Meme = {
  topText: string;
  bottomText: string;
  imageUrl: string;
};

const Main = () => {
  const [meme, setMeme] = useState<Meme>({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleOnChange(event: ChangeEvent) {
    const { value } = event.currentTarget as HTMLInputElement;
    setMeme((prev) => {
      return { ...prev, topText: value };
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleOnChange}
          />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>

        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
};

export default Main;
