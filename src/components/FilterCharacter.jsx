import PropTypes from "react";


function FilterCharacter({handleFilterCharacter}) {

  
    const handleInputCharacter = ( event) => {
      handleFilterCharacter(event.currentTarget.value)
    };
   
    
    return (
    <>
      <label htmlFor="friends-name">Filtrar por personaje:</label>
      <select className="form__filter" type="text" id="friends-name" onInput={handleInputCharacter}>
        <option value="all">Todos</option>
        <option value="Ross">Ross</option>
        <option value="Monica">Monica</option>
        <option value="Joey">Joey</option>
        <option value="Phoebe">Phoebe</option>
        <option value="Chandler">Chandler</option>
        <option value="Rachel">Rachel</option>
      </select>
    </>
  );
}

export default FilterCharacter;
