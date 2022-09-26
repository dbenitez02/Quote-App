import React, { Component } from 'react';

class Quote extends Component {
   constructor(props) {
      super(props)
      this.state = {
         number: 0
      };
      this.randomNumber = this.randomNumber.bind(this);
   }

   randomNumber() {
      this.setState({ number: Math.floor(Math.random() * 5) });

}

render() {
   
   const quotes = [
      {
         quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
         author: "Nelson Mandela",
      },
      {
         quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
         author: "Steve Jobs",
      },
      {
         quote: "Life is what happens when you're busy making other plans.",
         author: "John Lennon"
      },
      {
         quote: "Life is really simple, but we insist on making it complicated.",
         author: "Confucius",
      },
      {
         quote: "Love the life you live. Live the life you love.",
         author: "Bob Marley",
      },
   ]
   const randomQuote = quotes[this.state.number].quote;
   const randomAuthor = quotes[this.state.number].author;

   return (
      <div className="container">
         <div className='quote'>
            <h2>"{randomQuote}"</h2>
            <p> -{randomAuthor}</p>
         </div>
         <div className='button'>
            <button className='btn btn-primary' onClick={this.randomNumber}>Press me</button>
         </div>
      </div>
   )
};

}

export default Quote;