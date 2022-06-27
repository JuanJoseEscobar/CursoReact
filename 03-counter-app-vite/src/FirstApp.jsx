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


//requisitos
FirstApp.propTypes = {
  tittle: PropTypes.string.isRequired,
  subtittle: PropTypes.number.isRequired
}

//defectos
FirstApp.defaultProps = {
  tittle: "No Hay titulo",
  subtittle: "No Hay subtittle",
}