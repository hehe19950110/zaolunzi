import React from 'react';
import '../importIcons'
import './icon.scss'
import classes  from '../helper/classnames'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;

}

const Icon:React.FC<IconProps> = (props) => {
  //Icon 是一个react的函数组件，他的属性类型是IconProps（里面有name:string）
  const {className,name,...restProps} = props;
  return (
      <svg className={classes('fui-icon', className) }
           {...restProps}
      >
        <use xlinkHref={`#${name}`} />
      </svg>
  );
};

export default Icon;
// <className={`fui-icon ${className ? className : ''}`}