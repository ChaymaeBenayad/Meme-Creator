import { useState, useEffect, useRef } from "react";
import exportAsImage from "../utils/exportAsImage";
import { Upload, Download, Image } from "../utils/icons";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    topTextX: "50",
    bottomTextX: "50",
    topTextY: "5",
    bottomTextY: "80",
    textSize: "32",
    changePosition: false,
    randomImage: "https://i.imgflip.com/wxica.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  const topTextStyle = {
    left: meme.changePosition ? meme.topTextX + "%" : "50%",
    top: meme.changePosition ? meme.topTextY + "%" : "5%",
  };

  const bottomTextStyle = {
    left: meme.changePosition ? meme.bottomTextX + "%" : "50%",
    top: meme.changePosition ? meme.bottomTextY + "%" : "80%",
  };

  const exportRef = useRef();

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes.filter((meme) => meme.box_count === 2));
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleUploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleDownloadImage() {
    exportAsImage(exportRef.current, "meme");
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Enter top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <div className="form--checkbox">
          <input
            type="checkbox"
            id="position"
            name="changePosition"
            checked={meme.changePosition}
            onChange={handleChange}
          />
          <label htmlFor="position" className="form--label">
            Change text position
          </label>
        </div>
        <div className="form--range">
          <label htmlFor="textSize" className="form--label">
            Text size: {meme.textSize}
          </label>
          <input
            type="range"
            min="6"
            max="64"
            id="textSize"
            className="styled-slider"
            name="textSize"
            value={meme.textSize}
            onChange={handleChange}
          />
        </div>
        {meme.changePosition && (
          <>
            <div className="form--range">
              <label htmlFor="topTextX" className="form--label">
                Top text X: {meme.topTextX}
              </label>
              <input
                type="range"
                id="topTextX"
                min="1"
                max="100"
                name="topTextX"
                value={meme.topTextX}
                onChange={handleChange}
                className="styled-slider"
              />
            </div>
            <div className="form--range">
              <label htmlFor="bottomTextX" className="form--label">
                Bottom text X: {meme.bottomTextX}
              </label>
              <input
                type="range"
                id="bottomTextX"
                min="1"
                max="100"
                name="bottomTextX"
                value={meme.bottomTextX}
                onChange={handleChange}
                className="styled-slider"
              />
            </div>
            <div className="form--range">
              <label htmlFor="topTextY" className="form--label">
                Top text Y: {meme.topTextY}
              </label>
              <input
                type="range"
                id="topTextY"
                min="1"
                max="100"
                name="topTextY"
                value={meme.topTextY}
                onChange={handleChange}
                className="styled-slider"
              />
            </div>
            <div className="form--range">
              <label htmlFor="bottomTextY" className="form--label">
                Bottom text Y: {meme.bottomTextY}
              </label>
              <input
                type="range"
                id="bottomTextY"
                min="1"
                max="100"
                name="bottomTextY"
                value={meme.bottomTextY}
                onChange={handleChange}
                className="styled-slider"
              />
            </div>
          </>
        )}
        <div className="form--upload">
          <input
            type="file"
            id="file"
            name="uploadedImage"
            className="file--input"
            onChange={handleUploadImage}
          />
          <label htmlFor="file" className="btn file--label">
            <Upload className="button--icon" /> Upload meme
          </label>
        </div>
        <button className="btn form--button" onClick={getMemeImage}>
          <Image className="button--icon" /> Generate meme
        </button>
      </div>

      <div
        ref={exportRef}
        className="meme"
        style={{ fontSize: meme.textSize + "px" }}
      >
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top" style={topTextStyle}>
          {meme.topText}
        </h2>
        <h2 className="meme--text bottom" style={bottomTextStyle}>
          {meme.bottomText}
        </h2>
      </div>
      <button
        className="btn meme--button bg--color"
        onClick={handleDownloadImage}
      >
        <Download className="button--icon" /> Download meme
      </button>
    </main>
  );
}
