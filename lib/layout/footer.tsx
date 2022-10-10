import { scopedClassMaker } from "../helper/classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopedClassMaker('zhu-layout');

const Footer: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={sc('footer')}>
      footer
    </div>
  );
};

export default Footer;