import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";
import HelloComponent from "./hello";

ReactDOM.render(
  //HelloComponentをレンダリング。レンダリング先にはindex.htmlのid=helloを指定
  //HelloComponentにcontentを引き渡している
  <HelloComponent content={"Hello World!"}/>,
  document.getElementById("root")
);