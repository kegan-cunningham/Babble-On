import React from 'react';
import ActionCable from 'actioncable';
import MessagesContainer from './messages_container';

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    const channelId = this.props.currentChannel != null ? this.props.currentChannel : null;
    const userId = this.props.currentUser != null ? this.props.currentUser : null;
    this.state = {
      currentChatMessage: '',
      currentChannel: channelId,
      currentUser: userId,
      messages: this.props.messages,
      success: true,
      selected: false
    };
  }

  componentWillMount() {
    this.createWebSocket();
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId)
    .then(
      () => {
        this.props.fetchChannel(this.props.match.params.channelId).then(
          () => {
            this.setState({ messages: this.props.messages });
            this.setState({ currentChannel: this.props.currentChannel });
            this.setState({ currentUser: this.props.currentUser });
          }
        )
      }
    )
    .then(
      () => {document.getElementsByClassName('messages')[0].classList.add('height-transition')}
    )
    .then(
      () => {this.scrollToBottom()}
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.fetchServer(nextProps.match.params.serverId)
      .then(() => this.props.fetchChannel(nextProps.match.params.channelId))
      .then(() => this.setState(this.state));
    }
    const channelId = nextProps.currentChannel != null ? nextProps.currentChannel: null;
    const userId = nextProps.currentUser != null ? nextProps.currentUser: null;
    this.setState({
      currentChatMessage: '',
      currentChannel: channelId,
      currentUser: userId,
      messages: nextProps.messages,
    });
  }

  componentWillUnmount() {
    this.deleteWebSocket();
  }

  scrollToBottom() {
    const scrollHeight = this.messagesList.scrollHeight;
    const height = this.messagesList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messagesList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  createWebSocket() {
    this.socket = ActionCable.createConsumer();
    this.chat = this.socket.subscriptions.create({
      channel: 'ChatSocket'
    }, {
      connected: () => {},
      received: (data) => {
        const currentChatMessage = this.state.currentChatMessage;
        this.props.fetchChannel(this.props.currentChannel.id)
          .then(() => this.setState({
             currentChatMessage,
             messages: this.props.messages,
           }));
      },
      create: function(chatContent) {
        this.perform('create', {
          body: chatContent.currentChatMessage,
          author_id: chatContent.currentUser.currentUser.id,
          channel_id: chatContent.currentChannel.id
        });
      }
    });
  }

  deleteWebSocket() {
    this.socket.subscriptions.remove(this.chat);
  }

  parseTime(message){
    let amPm = ' AM';
    let messageTime = "";
    let messageTimeHour;
    messageTimeHour = message.created_at.slice(11,13);
    if (parseInt(messageTimeHour) > 12){
      amPm = ' PM';
      messageTimeHour = (parseInt(messageTimeHour) % 12).toString();
    }
    if (messageTimeHour[0] == 0){
      messageTimeHour = messageTimeHour.slice(1);
    }
    messageTime += message.created_at.slice(13, 19);
    return messageTimeHour + messageTime + amPm;
  }

  handleInput(e) {
    this.setState({
      currentChatMessage: e.target.value
    });
  }

  refetch() {
    this.props.fetchServer(this.props.match.params.serverId).then(
      () => {
        this.props.fetchChannel(this.props.match.params.channelId).then(
          () => {
            this.setState({ messages: this.props.messages });
            this.setState({ currentChannel: this.props.currentChannel });
            this.setState({ currentUser: this.props.currentUser });
          }
        )
      }
    )
  }

  handleSubmit(event) {
    if(event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.chat.create(this.state);
      this.setState({
        currentChatMessage: ''
      })
    }
  }

  render() {
    let messages = [];
    if (this.state.messages != null) messages = this.state.messages.slice();
    messages = messages.map(message => {
      const time = this.parseTime(message);
      return(
        <div key={message.id} className="message-container">
          <section className="message-info">
            <div className="message-author">
              { message.author }
            </div>
            <div className="message-created-at">
               at { time }
            </div>
          </section>
          <p className="message-body">{ message.body }</p>
        </div>
      );
    });
    return (
      <div className="messages" ref={(el) => { this.messagesList = el; }}>
        { messages }
        <textarea
          className="message-input"
          autoFocus
          type="text"
          placeholder="Type a message to send"
          value={this.state.currentChatMessage}
          onKeyPress={ (e) => this.handleSubmit(e) }
          onChange={ (e) => this.handleInput(e) }
          />
      </div>
    );
  }
}
