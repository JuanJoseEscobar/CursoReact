import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomeHook = () => {

    const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>
      <hr />

      <button className="btn btn-primary" onClick={ () => increment(15) }>+3</button>
      <button className="btn btn-primary" onClick={ reset }>Reset</button>
      <button className="btn btn-primary" onClick={ () => decrement(15) }>-3</button>

    </>
  )
}
