import React from "react";
import { ReactElement } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
    </div>
  );
};

export default Layout;