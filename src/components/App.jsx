import { useState } from 'react';

import Header from './Header';
import Form from './Form'
import List from './List'

import "../scss/App.scss";

import dataFriends from "../data/dataFriends.json"



function App() {

  const [friends] = useState(dataFriends);

  return (
    <div className="container">
      <Header></Header>
      <main>
        <Form></Form>
        <List friends={friends}></List>
      </main>
    </div>
  );
}

export default App;
