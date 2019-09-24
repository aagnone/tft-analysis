import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AutosizeInput from "react-input-autosize";
import { BoardContext } from "../context/BoardContext";



const ShareComp = () => {
  const { createURL } = useContext(BoardContext);
  const [shareable, setShareable] = useState("");
  const [copied, setCopied] = useState(false)

  const copiedStyle = {
    color: 'red', display: 'inline-block', fontSize: '8px', transition: 'all .3s ease', opacity: copied ? 1 : 0, marginLeft: '8px'
  }

  const handleCopied = () => {
    setCopied(true);

    setTimeout(() => setCopied(false), 1300)
  }

  const handleCreateURL = () => {
    setShareable(createURL());
  };

  return (
    <>
      <button onClick={handleCreateURL}>Share Composition!</button>
      <div style={{ display: shareable ? "block" : "none" }}>
        <AutosizeInput name="copyComposition" value={shareable} readOnly />
        <CopyToClipboard text={shareable} onCopy={handleCopied}>
          <button>Copy</button>
        </CopyToClipboard>
        <p style={copiedStyle}>Copied!</p>
      </div>
    </>
  );
}

export default ShareComp;