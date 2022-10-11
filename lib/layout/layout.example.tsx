import React from "react";
import Aside from "./aside";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";
import './layout.example.scss';

export default function () {
  return (
    <div>
      <div className="e" >
        <h1>layout:第一个例子</h1>
        <Layout style={{height: 300, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>

      <div className="e" >
        <h1>layout:第二个例子</h1>
        <Layout style={{height: 300, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Layout >
            <Aside className="z">aside</Aside>
            <Content className="y">content</Content>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>

      <div className="e" >
        <h1>layout:第三个例子</h1>
        <Layout style={{height: 300, width: 500}} className="hi">
          <Header className="x">header</Header>
          <Layout>
            <Content className="y">content</Content>
            <Aside className="z">aside</Aside>
          </Layout>
          <Footer className="x">footer</Footer>
        </Layout>
      </div>

      <div className="e" >
        <h1>layout:第四个例子</h1>
        <Layout style={{height: 300, width: 500}} className="hi">
          <Aside className="z">aside</Aside>
          <Layout>
            <Header className="x">header</Header>
            <Content className="y">content</Content>
            <Footer className="x">footer</Footer>
          </Layout>
        </Layout>
      </div>

    </div>
  );
}

