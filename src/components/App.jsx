import { useState } from 'react';

import Header from './Header';
import Form from './Form'
import List from './List'

import "../scss/App.scss";

import dataFriends from "../data/dataFriends.json"



function App() {

  const [friends] = useState(dataFriends);

  const [filterQuote, setFilterQuote] = useState('')

//const [filteredCharacter, setFilterCharacter] = useState('')

  const handleFilterQuote = (value) => {
    setFilterQuote(value)
  };

  /*const handleFilterCharacter = (value) => {
    setFilterCharacter(value)
  };*/

  const filteredQuotes = friends.filter (friend => 
    friend.quote.toLowerCase().includes(filterQuote.toLowerCase())
  
  );

  /*const filteredFriends = filteredQuotes.filter (friend => {
   // if (filterCharacter !== 'all') {
      friend.character.toLowerCase().includes(filteredCharacter)
   // }
   // else {

   // }
     });
  */

  return (
    <div className="container">
      <Header></Header>
      <main>
        <Form handleFilterQuote= {handleFilterQuote}></Form>
        <List friends={filteredQuotes}></List>
      </main>
    </div>
  );
}

export default App;
