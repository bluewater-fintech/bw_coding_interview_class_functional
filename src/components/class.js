import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            text: '',
            msg: 'First Message',
        }
    }

    handleChange = (e) => {
        let field = e.target.name;
        let text = e.target.value;

        this.setState({
            ...this.state,
            [field]: text,
        })
    }

    componentDidMount = () => {
        this.setState({
            username: 'James B.',
            text: 'This is test text.',
            ...this.state,
        })
    }

    componentWillUnmount = () => {
        window.alert('The component was unmounted.')
    }

    render() {
        return (
            <>
                <input name='username' value={this.state.username} onChange={(e) => this.handleChange(e)} />
                <input name='text' value={this.state.text} onChange={(e) => this.handleChange(e)} />
                <p>{this.state.username} | | | | {this.state.text}</p> 
            </>
        )
    }
}

export default ClassComponent