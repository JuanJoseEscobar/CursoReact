import { useState } from 'react';
import PropTypes from 'prop-types';//tienen que instalarse en vite: npm install prop-types


const CounterApp = ({ value }) =>{//rafc
    const [count,setCount] = useState(value);

    const handleAdd = () => setCount(count + 1);
    const handleleft = () => setCount(count - 1);
    const handleReset = () => setCount(value);

    return (
        <>
            <h1>Astro</h1>
            <h1>CounterApp</h1>
            <h2>{ count }</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleleft}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default CounterApp;

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: -1,
}
