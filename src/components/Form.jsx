import PropTypes from 'react';

import FilterCharacter from "./FilterCharacter";
import FilterQuote from "./FilterQuote";

function Form({handleFilterQuote, handleFilterCharacter}) {

    return (
        <form className="form">
          <FilterQuote handleFilterQuote={handleFilterQuote} ></FilterQuote>
          <FilterCharacter handleFilterCharacter={handleFilterCharacter}/>
        </form>
    );
}

export default Form;