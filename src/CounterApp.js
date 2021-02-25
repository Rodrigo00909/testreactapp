import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.string.isRequired // Convierte a numerico
};

export default CounterApp;