import './App.css';
import { QUOTES } from '../data/quotes'

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg_color: "#" + Math.floor(Math.random()*16777215).toString(16),
      quote: QUOTES[Math.floor(Math.random()*QUOTES.length)].quote,
      author: QUOTES[Math.floor(Math.random()*QUOTES.length)].author,
    }
    this.showNewQuote = this.showNewQuote.bind(this);
  }

  showNewQuote() {
    let quote = QUOTES[Math.floor(Math.random()*QUOTES.length)]
    this.setState({
      bg_color: "#" + Math.floor(Math.random()*16777215).toString(16),
      quote: quote.quote,
      author: quote.author
    });
  }

  render() {
    return (
      <div id="main" style={{backgroundColor: this.state.bg_color}}>
        <div id="quote-box" className="center" style={{backgroundColor: 'white'}}>
          <div id="quote-text" style={{color: this.state.bg_color}}>
            <i class="fa fa-quote-left"></i>
            <span id="text"> {this.state.quote} </span>
          </div>
          <div id="author" style={{color: this.state.bg_color}}>
            - {this.state.author}
          </div>
          <div class='buttons'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <a 
              class="button fa fa-twitter"
              title="Tweet this quote!"
              href={'https://twitter.com/intent/tweet?text=' + this.state.quote + ' - ' + this.state.author}
              id="tweet-quote"
              style={{backgroundColor: this.state.bg_color}}
            >
            </a>
            <a 
              class="button fa fa-tumblr"
              title="Post this quote on tumblr!"
              href={'https://twitter.com/intent/tweet?text=' + this.state.quote + ' - ' + this.state.author}
              id="tumbrl-quote"
              style={{backgroundColor: this.state.bg_color}}
            >
            </a>
            <div class='button' id="new-quote" style={{backgroundColor: this.state.bg_color}}>
              <button onClick={this.showNewQuote}>New quote</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
