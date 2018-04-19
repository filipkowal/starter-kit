import React, { Component } from "react";
import { Layout, Input, Button } from "antd";
import { connect } from 'react-redux'

import firestore from "./firestore";
import { incrementCount, decrementCount } from './state/actions'

import "./App.css";

const { Header, Footer, Content } = Layout;

const App = props => {
  const { incrementCount, decrementCount } = props
  return (
    <Layout className="App" >
      {console.log(props)}
      <Header className="App-header">
        <h1>Starter Kit</h1>
      </Header>
      <Content className="App-content">

        <Button
          className="App-add-todo-button"
          size="large"
          type="primary"
          onClick={incrementCount}
        >
          Increment count
          </Button>
        <Button
          className="App-add-todo-button"
          size="large"
          type="primary"
          onClick={decrementCount}
        >
          Decrement count
          </Button>
        <h1>{props.count}</h1>
      </Content>
    </Layout >
  );
}

const actions = { incrementCount, decrementCount }
const state = state => {
  return { count: state.app.count }
}
export default connect(state, actions)(App)