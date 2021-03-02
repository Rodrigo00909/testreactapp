import {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    const [counter, setCounter] = useState( value );

    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    
    const handleRest = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }
    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>sumar +1</button> {/* No ejecutar la función, solo se lo llama sin el () xq onClick ya llama a la funcion */}
            {/* habrá ocaciones que necesitemos darle un argumento y para eso usaremos una funcion flecha y llamamos a la funcion, pero normalmente es asi */}
            <button onClick={ handleRest }>restar -1</button>
            <button onClick={ handleReset }>reset</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired // Convierte a numerico
};

export default CounterApp;