import { useState } from "react";

import Header from "./Header";
import Form from "./Form";
import List from "./List";

import "../scss/App.scss";

import dataFriends from "../data/dataFriends.json";

function App() {
  const [friends] = useState(dataFriends);

  const [filterQuote, setFilterQuote] = useState("");

  const [filteredCharacter, setFilterCharacter] = useState("all");

  const handleFilterQuote = (value) => {
    setFilterQuote(value);
  };

  const handleFilterCharacter = (value) => {
    setFilterCharacter(value);
  };

  const filteredQuotes = friends.filter((friend) =>
    friend.quote.toLowerCase().includes(filterQuote.toLowerCase())
  );

  const filteredFriends = filteredQuotes.filter((friend) => {
    if (filteredCharacter === "all") {
      return true;
    } else {
      return friend.character === filteredCharacter;
    }
  });

  return (
    <div className="container">
      <Header></Header>
      <main>
        <Form
          handleFilterQuote={handleFilterQuote}
          handleFilterCharacter={handleFilterCharacter}
        ></Form>
        <List friends={filteredFriends}></List>
      </main>
    </div>
  );
}

export default App;
