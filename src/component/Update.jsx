import React, {Component} from 'react'

export default class Update extends Component {
    state = {
        title: this.props.title,
        desc : this.props.desc,
        id : this.props.id
    };

    onChnageHandler(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={function(e) {
                e.preventDefault();
                this.props.onSubmit(e.target.title.value, e.target.desc.value, Number(e.target.id.value));
            }.bind(this)}>
                <input type="hidden" name="id" value={this.state.id}/>
                <p>
                    <input type="text" name="title" placeholder="title" onChange={this.onChnageHandler.bind(this)} value={this.state.title}/>
                </p>
                <p>
                    <textarea type="text" name="desc" placeholder="description" onChange={this.onChnageHandler.bind(this)} value={this.state.desc} />
                </p>
                <p>
                    <input type="submit"/>
                </p>
            </form>
        );
    }
}