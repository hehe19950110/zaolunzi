// import React from "react";
// import Icon from './icon/icon'
// import {createRoot} from 'react-dom/client'

//不兼容版本：
// ReactDOM.render(<div>
//   <Icon name="wechat"></Icon>
//   </div>,document.querySelector('#root')
// );



// const container = document.getElementById('root');
// const root = createRoot(container) ;



// root.render(<div>
//   <Icon name="wechat" 
//         onMouseEnter = {() => console.log('enter')}
//         onMouseLeave = {() => console.log('leave')}
//         onTouchStart = {() => console.log('touch')}
//   />
//   <Icon name="alipay" />
//   <Icon name="qq" />
// </div>
// );



export {default as Icon} from './icon/icon';
import './index.scss';
