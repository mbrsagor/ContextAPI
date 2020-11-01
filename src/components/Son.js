import React, { Component } from 'react';
import Nati from './Nati';

class Son extends Component {
    render() {
        return (
            <div>
                <Nati name={this.props.name} />
            </div>
        )
    }
}

export default Son;
