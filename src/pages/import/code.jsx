import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import {tomorrow} from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";

const Code = ({lang, children}) => (
  <SyntaxHighlighter language={lang} style={tomorrow}>
    {children}
  </SyntaxHighlighter>
);

export default Code
