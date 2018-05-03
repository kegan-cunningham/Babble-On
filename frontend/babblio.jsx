import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import Login from './components/session_form/session_form_container';
import HeaderContainer from './components/header/header_container';
import FooterContainer from './components/footer/footer_container';
import Homepage from './homepage';

const App = () => (
  <div>
    <header>
      <section className="header-container">
        <h1 className="header-logo"><Link to={'/'}>Babblio</Link></h1>
        <HeaderContainer/>
      </section>
    </header>

    <AuthRoute exact path="/" component={ Login } />
    <Route exact path="/" component={ Homepage } />
    {/* <Route path="/users/:id" component={ UserShowContainer } /> */}
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
