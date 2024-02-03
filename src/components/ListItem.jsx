import propTypes from 'prop-types';


function ListItem({quote, character}) {
  return (
    <>
        <p className="list__item__text">
          {quote} -{" "}
          <span className="list__item__character">{character}</span>
        </p>
      
    </>
  );
}

ListItem.propTypes ={
    quote: propTypes.string.isRequired,
    character: propTypes.string.isRequired,
}

export default ListItem;
