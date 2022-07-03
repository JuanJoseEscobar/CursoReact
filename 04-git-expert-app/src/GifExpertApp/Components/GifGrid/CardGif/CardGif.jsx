
export const CardGif = ({title,url}) => {
  return (
    <div className="card">
      <img src={url} alt="404. not found: "/>
      <li>{ title }</li>
    </div>
  )
}