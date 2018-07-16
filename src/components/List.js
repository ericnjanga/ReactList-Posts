import React from 'react';
import PropTypes from 'prop-types';

const List = ({ collection, textKey, titleKey }) => (

  <ul>
    {
      collection && collection.map(item => {
        console.log('----item=', item);
        return(
          <li key={item.id} style={{ listStyle: 'none', margin: '20px', padding: '20px', background: '#ccc' }}>
            <h3>{ item[titleKey] }</h3>
            { item[textKey] && <div>{ item[textKey] }</div> }
          </li>
        );
      })
    }
  </ul>

);

export default List;


List.propTypes = {
  collection: PropTypes.array,
  textKey: PropTypes.string, //specify the optional field
  titleKey: PropTypes.string, //the name of the attribute to be displayed
};