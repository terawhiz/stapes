import { useState, useRef } from "react";

function Converter(props) {
  const [longUrl, setLongUrl] = useState("cap cap cap");
  const urlInput = useRef();
  async function submitLongUrl() {
    setLongUrl(urlInput.current.value);

    // setLongUrl takes time to change its state so I directly pass the value
    props.onSubmit(urlInput.current.value);
  }
  return (
    <div className="shortener-tools">
      <input
        type="text"
        placeholder="Enter url..."
        className="longurl"
	spellcheck="false"
        ref={urlInput}
      />
      <button className="shorten-button" onClick={submitLongUrl}>
        Shorten
      </button>
    </div>
  );
}

export default Converter;
