import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";
import HelloComponent from "./hello";

declare global {
  interface Window {
    acquireVsCodeApi(): any;
  }
}

const vscode = window.acquireVsCodeApi();

//WebView -> VSCode
vscode.postMessage({
  type: 'msg',
  text: 'WebView->VSCode'
});

//VSCode -> WebView
window.addEventListener('message', event => {
  console.log(event); //ctrl + shift + p -> WebView開発者ツール
});

ReactDOM.render(
  <HelloComponent vscode = {""} content={"Hello World!"}/>,
  document.getElementById("root")
);