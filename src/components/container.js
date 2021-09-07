import React from 'react';
import ClassComponent from './class';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_child: false,
        };
    };

    render() {
        return (
            <>
                {this.state.show_child ? <ClassComponent name={this.props.name}/> : null}
                <button onClick={(e) => this.setState({show_child: !this.state.show_child})}>Show Child</button>
            </>
        )
    }
}

export default Container;