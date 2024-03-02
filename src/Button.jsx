import useCount from './store'


export const Button = () => {
    const [state, setState] = useCount()

    return (
        <div>
            <button style={{ backgroundColor: '#91b4ed' }} className={'shared-btn'} onClick={() => setState((s) => s + 1)}>
                Click me { state }
            </button>
        </div>
    )
}

export default Button