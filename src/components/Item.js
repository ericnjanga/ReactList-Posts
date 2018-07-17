import React from 'react';
import PropTypes from 'prop-types';
import Figure from './Figure.js';

/**
 * Component representing an item of the list
 * @param {*} title
 * @param {*} text
 */
const Item = ({ title, text, img, style }) => {

  return (
    <li style={style.container}>
      <h3 style={style.title}>{title}</h3>
      { console.log('---img=', img) }
      { img && <Figure src={img} alt={title} /> }
      { text && <div style={style.text}>{text}</div> }
    </li>
  );

};

Item.propTypes = {
  title: PropTypes.string.isRequired, // specify the optional field
  text: PropTypes.string.isRequired, // the name of the attribute to be displayed
  img: PropTypes.string, // the name of the attribute to be displayed
  style: PropTypes.shape({
    figure: PropTypes.shape({
      margin: PropTypes.number,
      padding: PropTypes.number,
    }),
    img: PropTypes.shape({
      width: PropTypes.string,
    }),
  }),
};

Item.defaultProps = {
  img: '', // the name of the attribute to be displayed
  style: { // Component will be styled by default if no "style" object is provided
    container: {
      listStyle: 'none',
      margin: '50px 0',
      background: '#fff',
      boxShadow: '0px 0px 1px 0px rgba(135,135,135,1)',
    },
    title: {
      margin: '0',
      padding: '20px',
      textAlign: 'left',
    },
    text: {
      padding: '20px',
      textAlign: 'left',
    },
  },
};

export default Item;