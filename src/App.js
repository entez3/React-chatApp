import React, { Component } from "react";
import "./style.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

export default class App extends Component {
  state = {
    title: "Chat",
    chatsList: [
      {
        type: "sent",
        message: "Good morning, sir. What can I do for you?",
        time: "11:37:08 am",
      },
      {
        type: "recive",
        message: "Well, I am just looking around.",
        time: "11:39:57 am",
      },
      {
        type: "sent",
        message: "If necessary, please ask me.",
        time: "11:40:10 am",
      },
    ],
    gravatar: {
      user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
      user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
  };
  render() {
    return (
      <div className="container bootstrap snippets">
        <div className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" id="chat">
            <Header title={this.state.title} />
            <Body gravatar={this.state.gravatar} chatsList={this.state.chatsList} />
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}
