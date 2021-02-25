import {Component} from 'react';
import Header from './component/Header';
import NavContainer from './containers/Nav';
import ArticleContainer from './containers/Article';
import ControlContainer from './containers/Control';
import CreateContainer from './containers/Create';
import UpdateContainer from './containers/Update';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    return (
    <div className="App">
      
      <Header />

      <NavContainer />

      <ControlContainer />
      {this.props.mode === 'CREATE' ? <CreateContainer/> : (this.props.mode === 'UPDATE' ? <UpdateContainer /> : <ArticleContainer />)}
    </div>
    )
  }
}

export default connect(function(state) {
  return {
    mode : state.mode
  }
})(App);
