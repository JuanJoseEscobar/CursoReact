import { memo } from "react";

export const Small = memo(({ value }) => {
    console.log(`me redibujo D: ${value}`)
  return (
    <small>{ value }</small>
  )
})
