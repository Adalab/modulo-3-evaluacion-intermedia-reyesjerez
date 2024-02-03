import Header from './Header';
import Form from './Form'
import List from './List'

import "../scss/App.scss";

import dataFriends from "../data/dataFriends.json"


function App() {
  return (
    <div className="container">
      <Header></Header>
      <main>
        <Form></Form>
        <List></List>
      </main>
    </div>
  );
}

export default App;
