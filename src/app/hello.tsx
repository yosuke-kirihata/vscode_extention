import * as React from 'react';

export interface HelloProps {
  vscode: any;
  content: String;  //contentにはHello World!が入るので、Stringを指定
}

const HelloComponent = (props: HelloProps) => {
  return (
    <div>
      {props.content}
    </div>
  );
};

export default HelloComponent;