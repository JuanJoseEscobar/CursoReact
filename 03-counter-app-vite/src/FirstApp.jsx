import PropTypes from 'prop-types';

const newMessage = {
  message: 'Hola Mundo',
  tittle: 'Astroz',
};

const getWaifu = ()=>{
  return 'Toga Himiko';
};

export const FirstApp = ( {tittle, subtittle} ) => {
  

  return (
    <>
      <code>{ JSON.stringify( newMessage ) }</code>
      <p>your waifu: { getWaifu() }</p>
      <p>{ tittle }</p>
      <p>{ subtittle }</p>
    </>
  )
}


//prototipo
FirstApp.propTypes = {
  tittle: PropTypes.string.isRequired,
  subtittle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  tittle: "No Hay titulo",
  subtittle: "No Hay subtittle",
}