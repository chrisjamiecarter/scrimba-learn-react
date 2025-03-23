import { ChangeEvent, useEffect, useState } from "react";

type Meme = {
  topText: string;
  bottomText: string;
  imageUrl: string;
};

type MemeResponse = {
  id: string;
  name: string;
  url: string;
};

const Main = () => {
  const [memes, setMemes] = useState<MemeResponse[]>([]);

  useEffect(() => {
    console.log("Fetching Memes");
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  const [meme, setMeme] = useState<Meme>({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function handleOnChange(event: ChangeEvent) {
    const { name, value } = event.currentTarget as HTMLInputElement;
    setMeme((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function getRandomMeme() {
    const random = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[random];
    setMeme((prev) => {
      return { ...prev, imageUrl: randomMeme.url };
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
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleOnChange}
            value={meme.bottomText}
          />
        </label>

        <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
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
