
import React, { useState } from 'react';
import QuoteDisplay from './QuoteDisplay';
import ListComponent from './CountryComponent';
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  margin: '10px 0',

  
};

const App = () => {
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [quoteData, setQuoteData] = useState({ quote: '', author: '' });
  const [Item, setItem] = useState({});
 

  const getRandomQuote = () => {
    const quotesArray = [
      {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, velit',
        author: 'Misha',
      },
      {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deleniti maxime porro sed aliquid magnam corporis temporibus, sint eum iure.',
        author: 'Oleg',
      },
      {
        quote: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti ipsa natus facilis rerum, eaque voluptatum.',
        author: 'Alex',
      },
      {
        quote: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quasi soluta, expedita doloribus provident velit perspiciatis officiis iusto ipsum, in molestias! Blanditiis!',
        author: 'Ruslan',
      },
      {
        quote: 'Lorem ipsum dolor sit amet.',
        author: 'Max',
      },
    ];

    const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    setQuoteData(randomQuote)
    setQuoteVisible(true);
  };

  const hideQuote = () => {
    setQuoteVisible(false);
  };

  return (
    <div>
      
      <button style={buttonStyle} onClick={getRandomQuote}>Quote of day!</button>
      {quoteVisible && <QuoteDisplay quote={quoteData.quote} author={quoteData.author} />}
      {quoteVisible && <button style={buttonStyle} onClick={hideQuote}>Hide</button>}
      
      <ListComponent></ListComponent>
    </div>



  );

  
};

export default App;
