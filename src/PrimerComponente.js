// Functional component
// const PrimeraApp = ( props ) => {
const PrimeraApp = ( {saludo} ) => {
    const objeto = {
        nombre: 'Rodrigo',
        edad: 21
    }
    return (
        <>
            {/* <h1>{props.saludo}</h1> */}
            <h1>{saludo}</h1>
            <p>Parrafo con react</p>
            <div>
                <h2>Hola, h2 desde el div</h2>
            </div>
            <pre>Objeto: {JSON.stringify(objeto, null, 3)}</pre>
        </>
    );
}

export default PrimeraApp;