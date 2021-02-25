import React, {Component} from 'react'
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="#welcome" onClick={function(){
                    this.props.onClick();
                }.bind(this)}>WEB</a></h1>
                World Wide WEB
            </header>
        )
    }
}

export default connect(null, function(dispatch) {
    return {
        onClick() {
            dispatch({type:'WELCOME', mode: 'WELCOME'});
        }
    }
})(Header);