import React, { Component } from 'react';
import { PutiConsumer } from './MyContext';

class Puti extends Component {
    render() {
        return (
            <div>
                <h2>
                    <PutiConsumer>
                        {
                            msg => {
                                return msg;
                            }
                        }
                    </PutiConsumer>
                </h2>
            </div>
        )
    }
}
export default Puti;
