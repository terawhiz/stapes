import axios from "axios";
import { useState } from "react";
import Converter from "../home/Converter";
import CopyHandler from "../home/CopyHandler";
import Logo from "./Logo";

function LightLayout() {
  const [show, setShow] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  function submitHandler(longUrl) {
    console.log(longUrl);
    axios
      .post("/api/new", {
        url: longUrl,
      })
      .then((response) => {
        setShow(true);
        setShortUrl(response.data.shortUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="bg-ciyamen h-screen border-8 border-blackCoral border-separate">
      <Logo />
      <div className="space-man">
        <Converter onSubmit={submitHandler} />
        {show ? <CopyHandler shortUrl={shortUrl} /> : null}
      </div>
    </div>
  );
}

export default LightLayout;
