import React from 'react';
import PropTypes from 'prop-types';
export const CounterApp = ({value}) => {
    const handledAdd = () => {
        console.log('Click')
    }
    return (
        <>
            <h1>Counter App</h1>
            <h2>{ value }</h2>
<button onClick={ handledAdd }>Click Me!
    +1
</button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}