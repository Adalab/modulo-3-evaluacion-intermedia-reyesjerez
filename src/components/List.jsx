import propTypes from 'prop-types';
import ListItem from "./ListItem";

function List ({friends}) {

    const html = friends.map ((friend, idx)=> (
        <li className="list__item" key={idx} >
      <ListItem
        quote={friend.quote}
        character={friend.character}
      />
    </li>
        ));

    return (
        <ul className="list">
          {html}
        </ul>
    );
}

List.propTypes={
    friends: propTypes.array
};

export default List ;