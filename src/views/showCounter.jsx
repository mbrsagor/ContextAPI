import React from 'react';

import CounterDispaly from '../components/counter/counter-dispaly';
import CounterButton from '../components/counter/counter-button';
import { CounterContextProvider } from '../context/counter_context';


export default function ShowCounter() {
    return (
        <div>
            <h2>Show Counter</h2>
            <hr />
            <CounterContextProvider>
                <CounterDispaly />
                <CounterButton />
            </CounterContextProvider>
        </div>
    )
}
