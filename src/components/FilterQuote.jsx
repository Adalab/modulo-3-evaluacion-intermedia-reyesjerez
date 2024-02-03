import propTypes from "react";


function FilterQuote({handleFilterQuote}) {

    const handleInput = ( event) => {
        handleFilterQuote(event.currentTarget.value)
    };

  return (
    <>
      <label htmlFor="friends-text">Filtrar por frase:</label>
      <input
        className="form__filter"
        type="text"
        id="friends-text"
        placeholder="Escribe aquí"
        onInput={handleInput}
      />
    </>
  );
}


export default FilterQuote;
