import "../scss/App.scss";

import dataFriends from "../data/dataFriends.json"


function App() {
  return (
    <div className="container">
      <header >
        <h1 className="title">Frases de friends</h1>
      </header>
      <main>
        <form className="form">
          <label htmlFor="friends-text">Filtrar por frase:</label>
          <input className="form__filter" type="text" id="friends-text" placeholder="Escribe aquí:"/>
          <label htmlFor="friends-name">Filtrar por personaje:</label>
          <input className="form__filter" type="select" id="friends-name">
          </input>
        </form>
        <ul className="list">
          <li className="list__item">
            <p className="list__item__text">Pivot! Pivot! Pivot! Pivot! Pivot! - <span className="list__item__character">Ross</span></p>  
          </li>
          <li className="list__item">
            <p className="list__item__text">Pivot! Pivot! Pivot! Pivot! Pivot! - <span className="list__item__character">Ross</span></p>  
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
