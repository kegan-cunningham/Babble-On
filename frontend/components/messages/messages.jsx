import React from 'react';
import MessagesContainer from './messages_container';

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
    };
  }

  handleInput() {
    return (e) => {
      this.setState({ chatMessage: e.target.value });
    };
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId).then(
      () => {this.props.fetchChannel(this.props.match.params.channelId);}
    )
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.fetchServer(nextProps.match.params.serverId)
      .then(() => this.props.fetchChannel(nextProps.match.params.channelId))
      .then(() => this.setState(this.state));
    }
  }

  render() {
    let messages = [];
    if (this.props.messages != null) messages = this.props.messages.slice().reverse();
    messages = messages.map(message => {
      return(
        <div className="message-body">
          • { message.body }
        </div>
      );
    });
    return (
      <div className="messages">
        { messages }
        <input
          className="message-input"
          autoFocus
          type="text"
          placeholder="Type a message to send"
          value={this.state.chatMessage}
          onChange={this.handleInput("")}
          />
      </div>
    );
  }
}
