import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AutosizeInput from "react-input-autosize";
import { BoardContext } from "../context/BoardContext";

const ShareComp = () => {
  const { createURL } = useContext(BoardContext);
  const [shareable, setShareable] = useState("");

  const handleCreateURL = () => {
    setShareable(createURL());
  };

  return (
    <>
      <button onClick={handleCreateURL}>Share Composition!</button>
      <div style={{ display: shareable ? "block" : "none" }}>
        <AutosizeInput name="copyComposition" value={shareable} readOnly />
        <CopyToClipboard text={shareable} onCopy={() => console.log(shareable)}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    </>
  );
}

export default ShareComp;