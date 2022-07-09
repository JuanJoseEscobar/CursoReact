import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHook = () => {
  
  const { data, hasError, isLoading } = useFetch('https://www.breakingbadapi.com/api/quotes/1');

  console.log(data,hasError,isLoading);
  
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
    </>
  )
}
