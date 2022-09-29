import React from "react";
import Icon from './icon/icon'
import {createRoot} from 'react-dom/client'

// ReactDOM.render(<div>
//   <Icon name="wechat"></Icon>
//   </div>,document.querySelector('#root')
// );

const container = document.getElementById('root');
const root = createRoot(container) ;
root.render(<div>
  <Icon name="wechat" />
  <Icon name="alipay" />
  <Icon name="qq" />
</div>
)


