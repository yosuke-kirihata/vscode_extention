import * as React from "react";

export interface HelloProps {
  content: String;  //contentにはHello World!が入るので、Stringを指定
}

export default class HelloComponent extends React.Component<HelloProps, {}> {
  // コンストラクタ
  constructor(props: HelloProps) {
	super(props);
  }
  // レンダリング（受け取ったcontent内の情報を表示）
  render() {
	return <div>{this.props.content}</div>;
  }
}