import React from "react";
import { scopedClassMaker } from "../helper/classnames";
interface Props extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopedClassMaker('zhu-layout');
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Aside;