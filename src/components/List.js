import React from 'react';
import PropTypes from 'prop-types';

/**
 * The List receives the props, and iterates over the collection, mapping all the items into another component
 * @param {*} collection
 * @param {*} titleKey // Name of the attribute to be displayed
 * @param {*} textKey // Name of the attribute to be displayed (optional)
 */
const List = ({ collection, textKey, titleKey }) => {

  const style = {
    margin: '0',
    padding: '0',
  };

  return (
    <ul style={style}>
      {
        collection && collection.map(item =>
          <Item key={item.id}
            title={item[titleKey]}
            text={item[textKey]}
          />
        )
      }
    </ul>
  );

};

/**
 * Component representing an item of the list
 * @param {*} title
 * @param {*} text
 */
const Item = ({ text, title }) => {

  const style = {
    listStyle: 'none',
    margin: '20px',
    padding: '20px',
    background: '#ccc',
  };

  return (
    <li style={style}>
      <h3>{title}</h3>
      { text && <div>{text}</div> }
    </li>
  );

};

export default List;


Item.propTypes = {
  title: PropTypes.string.isRequired, // specify the optional field
  text: PropTypes.string.isRequired, // the name of the attribute to be displayed
};

List.propTypes = {
  collection: PropTypes.array.isRequired,
  textKey: PropTypes.string.isRequired, // specify the optional field
  titleKey: PropTypes.string.isRequired, // the name of the attribute to be displayed
};