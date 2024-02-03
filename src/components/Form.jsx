import propTypes from 'prop-types';

import FilterCharacter from "./FilterCharacter";
import FilterQuote from "./FilterQuote";

function Form({handleFilterQuote}) {

    return (
        <form className="form">
          <FilterQuote handleFilterQuote={handleFilterQuote}></FilterQuote>
          <FilterCharacter></FilterCharacter>
        </form>
    );
}

export default Form;