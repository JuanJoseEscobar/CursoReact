import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./";



export const MultipleCustomHook = () => {

  const { counter, increment } = useCounter(1);
  
  const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author, quote} = !!data && data[0];//volada de mente

  
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        ( isLoading )
        ? <LoadingQuote/>
        : <Quote author={author} quote={quote} />
      }

      <button className="btn btn-primary"
      disabled={ isLoading }
      onClick={()=>increment()}>
        Next quote
      </button>

    </>
  )
}
