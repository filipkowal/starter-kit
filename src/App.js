import React, { Component } from "react";
import { Layout, Input, Button } from "antd";

import firestore from "./firestore";

import "./App.css";

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { addingTodo: false, pendingTodo: "" };
    this.addTodo = this.addTodo.bind(this);
  }

  async addTodo(evt) {
    this.setState({ addingTodo: true });
    await firestore.collection("todos").add({
      content: this.state.pendingTodo,
      completed: false
    });
    this.setState({ addingTodo: false, pendingTodo: "" });
  }

  render() {
    return (
      <Layout className="App">
        <Header className="App-header">
          <h1>Starter Kit</h1>
        </Header>
        <Content className="App-content">
          <Input
            ref="add-todo-input"
            className="App-add-todo-input"
            size="large"
            placeholder="Whatever you want"
            disabled={this.state.addingTodo}
            onChange={evt => this.setState({ pendingTodo: evt.target.value })}
            value={this.state.pendingTodo}
            onPressEnter={this.addTodo}
          />
          <Button
            className="App-add-todo-button"
            size="large"
            type="primary"
            onClick={this.addTodo}
            loading={this.state.addingTodo}
          >
            Add item to firestore
          </Button>
        </Content>
      </Layout>
    );
  }
}

export default App