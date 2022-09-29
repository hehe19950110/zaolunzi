import React from "react";
import Icon from './icon/icon'
import {createRoot} from 'react-dom/client'


// ReactDOM.render(<div>
//   <Icon name="wechat"></Icon>
//   </div>,document.querySelector('#root')
// );

const container = document.getElementById('root');
const root = createRoot(container) ;

const fn = () => {
  console.log('fn')
}
root.render(<div>
  <Icon name="wechat" onClick={fn}/>
  <Icon name="alipay" onClick={fn}/>
  <Icon name="qq" onClick={fn}/>
</div>
)


