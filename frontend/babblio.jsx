import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Login from './components/session_form/session_form_container';
import Join from './components/session_form/join_form_container';
import HeaderContainer from './components/header/header_container';
import FooterContainer from './components/footer/footer_container';
import UserShowContainer from './components/users/user_show_container';
import ServerIndexContainer from './components/servers/server_index_container';
import ChannelIndexContainer from './components/channels/channel_index_container';
import MessagesContainer from './components/messages/messages_container';

const App = () => (
  <div className="body">
    <header>
      <section className="header-container">
        <HeaderContainer/>
      </section>
    </header>

    <AuthRoute exact path="/" component={ Login } />
    <AuthRoute exact path="/join" component={ Join } />
    <ProtectedRoute exact path="/" component={ ServerIndexContainer } />
    <ProtectedRoute path="/:serverId/:channelId" component={ ChannelIndexContainer } />
    <ProtectedRoute path="/:serverId/:channelId" component={ MessagesContainer } />
    <Route path="/users/:id" component={ UserShowContainer } />
    <footer>
      <FooterContainer/>
    </footer>
</div>
);

export default App;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Babblio</h1>, root);
});
