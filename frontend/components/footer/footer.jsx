import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {

    return (
      <div className="footer">
        <a className='github' href='https://github.com/kegan-cunningham/'/>
        <a className='linkedin' href='http://www.linkedin.com/in/kegan-cunningham'/>
        <a className='portfolio' href='http://kegan-cunningham.me'/>
      </div>
    );
  }
}

export default withRouter(Footer);
