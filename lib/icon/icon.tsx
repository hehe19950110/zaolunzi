import React from 'react';
import '../icon/importIcons.js';
import './icon.scss';
import classes  from '../helper/classnames'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> =
  ({className, name, ...restProps}) => {

    return (
      <svg className={classes('fui-icon', className)}
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    );
  };

export default Icon;