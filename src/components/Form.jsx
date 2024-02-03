function Form() {

    return (
        <form className="form">
          <label htmlFor="friends-text">Filtrar por frase:</label>
          <input className="form__filter" type="text" id="friends-text" placeholder="Escribe aquí"/>
          <label htmlFor="friends-name">Filtrar por personaje:</label>
          <input className="form__filter" type="text" id="friends-name">
          </input>
        </form>
    );
}

export default Form;