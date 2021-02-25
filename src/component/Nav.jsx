import React, {Component} from 'react'

export default class Nav extends Component {
    render() {
        let t = [];
        this.props.data.forEach((v) => {
            t.push(<li key={v.id}><a href="#" data-id={v.id} onClick={function(e) {
                this.props.onClick(Number(e.target.dataset.id));
            }.bind(this)}>{v.title}</a></li>);
        });

        return (
            <nav>
            <ol>
              {t}
            </ol>
          </nav>
        )
    }
}