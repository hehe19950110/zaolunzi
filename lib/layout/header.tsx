import { scopedClassMaker } from "../helper/classnames";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
}
const sc = scopedClassMaker('zhu-layout');

const Header: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={sc('header')}> 
      header
    </div>
  );
};

export default Header;