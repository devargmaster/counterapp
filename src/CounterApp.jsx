import {useState} from 'react';
import PropTypes from 'prop-types';
export const CounterApp = ({value}) => {
    const [counter,setCounter] = useState(100);
    const handledAdd = () => {
        setCounter(counter + 1);
    }
    const handledSubtract = () => {
        setCounter(counter - 1);
    }
    const handledReset = () => {
        setCounter(value);
    }
    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <button onClick={ handledAdd }>
                +1
            </button>
            <button onClick={ handledSubtract }>
                -1
            </button>
            <button onClick={ handledReset }>
                Reset
            </button>
        </>
    )
}
CounterApp.propTypes = {
    value: PropTypes.number
}