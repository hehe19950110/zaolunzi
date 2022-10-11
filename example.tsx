import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
//import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import ButtonExample from './lib/button.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Aside, Header, Content, Footer} from './lib/layout/layout';
import './example.scss'
import IconDemo from './lib/icon/icon.demo'

require('!!raw-loader!./lib/icon/icon.example.tsx')
const logo = require ('./logo.png')

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="128" height="128" alt=""/>
          <span> 组件库 </span>
        </div>
      </Header>

      <Layout>
        <Aside className="site-aside">
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">layout</NavLink>
            </li>
          </ul>
        </Aside>

        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>

      <Footer className="site-footer">
        &copy; 赵欢欣
      </Footer>
    </Layout>

  </Router>
  , document.querySelector('#root'));