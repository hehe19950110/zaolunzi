import { scopedClassMaker } from "../helper/classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopedClassMaker('zhu-layout');

const Content: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={sc('content')}>
      content
    </div>
  );
};

export default Content;