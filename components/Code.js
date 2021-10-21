import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism"
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "../styles/Home.module.css"
function Code({snippet}) {
  const codeString = "npm install import react from 'react'";
  const [show, setshow] = React.useState(false)
  return (
    <div>
      <button onClick={() => setshow(!show)}>Show Code</button>
      {show ? (
        <div>
          <CopyToClipboard text={snippet.data.code}>
            <button className={styles.btn}>Copy</button>
          </CopyToClipboard>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {snippet.data.code}
          </SyntaxHighlighter>
        </div>
      ) : null}
    </div>
  );
}
export default Code;
