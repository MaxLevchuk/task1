import React from 'react';


const quoteStyle = {
  padding: '20px',
  border: '5px solid #ccc',
  borderRadius: '20px',
  margin: '20px',
  
  
};

const QuoteDisplay = ({ quote, author }) => (
  <div style={quoteStyle}>
    <p>"{quote}"</p>
    <p>- {author}</p>
  </div>
);

export default QuoteDisplay;
