import React, { FC } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Navbar from "./components/Navbar";

const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};

export default App;
