import "./Prompt.css";
import { useState, useEffect } from "react";
import memeLogo from '../../assets/button_image.png'
// import memeData from '../../assets/data/memeData'

function Prompt() {
  const [allMemes, setAllMemes] = useState([])

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  // console.log( meme)

  const randomIntegerInRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;



  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(json => {
        setAllMemes(json)
        console.log(json)
      })
      .catch(error => console.error(error));
  }, [meme]);
  const handleInputs = (e) => {
    let { value, name } = e.target
    // console.log(value, name)
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))

  }
  const getMemeImage = (e) => {
    e.preventDefault();

    const memeIndex = randomIntegerInRange(0, allMemes.data.memes.length);
    const randomMeme = allMemes.data.memes[memeIndex];
    // console.log(memeIndex, memeData.data.memes[memeIndex])
    // setMemeImage(randomMeme.url)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: randomMeme.url
    }))
    // Add your form submission logic here
  };

  return (
    <div className="Prompt">
      <fieldset>
        <form action="#" method="get">
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="topText">Top Text</label>
              <input
                type="text"
                name="topText"
                id="topText"
                value={meme.topText}
                onChange={(e) => handleInputs(e)}
                placeholder="Shut up"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="bottomText">Bottom Text</label>
              <input
                type="text"
                name="bottomText"
                id="bottomText"
                value={meme.bottomText}
                onChange={(e) => handleInputs(e)}
                placeholder="and Take My Money"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            value="Submit"
            className="image-btn"
            onClick={(e) => getMemeImage(e)}
          >
            Generate Meme Image
            <img
              src={memeLogo}
              className="logo"
              alt="Meme Thumbnail"
            />
          </button>

          <div className="input-group">
            <div className="Meme-Box">
              <img src={meme.randomImage} className="logo" alt="Meme Image" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default Prompt;
