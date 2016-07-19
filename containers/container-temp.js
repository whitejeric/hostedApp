import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {logState} from '../actions/index';

class TempContainer extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.logState();
  }

  render(){
    return(
      <div>
        Hello world
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    temp: state.temp
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({logState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TempContainer);
