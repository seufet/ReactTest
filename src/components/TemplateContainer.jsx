import React from 'react';
import { connect } from 'react-redux';
import { checkSession } from '../actions/authentication';

import Template from './Template';

class TemplateContainer extends React.Component {
  constructor(props) {
    super(props);

    // bound functions
    this.checkUserSession = this.checkUserSession.bind(this);
  }
  
  componentWillMount() {
    // Before the component mounts, check for an existing user session
    this.checkUserSession();
  }

  checkUserSession() {
    const { dispatch } = this.props;
    dispatch(checkSession());
  }

  render() {
    const { authentication, progress } = this.props;
    return (
      <Template progress={progress} authentication={authentication} />
    );
  }
}

function mapStateToProps(state) {
  return {
  	authentication: state.authentication,
    progress: state.progress,
  };
}

export default connect(mapStateToProps)(TemplateContainer);