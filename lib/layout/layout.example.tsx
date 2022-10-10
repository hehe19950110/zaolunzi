import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Layout from "./layout";

export default function () {
  return (
    <div>
      <div >
        <h1>layout第一个例子</h1>
        <Layout style={{height: 500, width: 500}} className="hi">
        <Header className="x">header</Header>
        <Content className="y">content</Content>
        <Footer className="x">footer</Footer>
        </Layout>
      </div>


    </div>
  );
}

