import { scopedClassMaker } from "../helper/classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopedClassMaker('zhu-layout');

const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Content;