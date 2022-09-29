import React from 'react';
import '../importIcons'
import './icon.scss'

interface IconProps {
  name: string;
  //onClick :React.MouseEventHandler<SVGAElement>
  onClick: () => void; 
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  //Icon 是一个react的函数组件，他的属性类型是IconProps（里面有name:string）
  return (
    <span>
      {/* <svg>
        <use xlinkHref="#wechat"></use>
      </svg>
      <svg>
        <use xlinkHref="#alipay"></use>
      </svg>
      <svg>
        <use xlinkHref="#qq"></use>
      </svg> */}
      <svg className='fui-icon' onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
