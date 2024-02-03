function FilterCharacter() {
  return (
    <>
      <label htmlFor="friends-name">Filtrar por personaje:</label>
      <select className="form__filter" type="text" id="friends-name">
        <option value="all">Todos</option>
        <option value="ross">Ross</option>
        <option value="monica">Monica</option>
        <option value="joey">Joey</option>
        <option value="phoebe">Phoebe</option>
        <option value="chandler">Chandler</option>
        <option value="rachel">Rachel</option>
      </select>
    </>
  );
}

export default FilterCharacter;
