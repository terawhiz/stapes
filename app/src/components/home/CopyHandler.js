import { Icon } from "@iconify/react";
import { useState } from "react";

function CopyHandler(props) {
  const [copied, setCopy] = useState(false);
  function copy() {
    setCopy(true);
    navigator.clipboard.writeText(props.shortUrl);
  }
  return (
    <div className="copy-tools">
      <input
        type="text"
        className="copy-text"
        readOnly
        value={props.shortUrl}
      />
      <button onClick={copy}>
        {copied ? (
          <Icon icon="ic:outline-done" color="#b7c3f3" height="45" />
        ) : (
          <Icon icon="fluent:copy-16-regular" color="#b7c3f3" height="45" />
        )}
      </button>
    </div>
  );
}

export default CopyHandler;
