import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { accordionContent } from './data';
import AccordionItem from './AccordianItem';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-3xl font-bold underline text-red-600">
          Hello world!
        </h1>
        {accordionContent.map((item, id) => (
          <AccordionItem key={id} id={id} content={item} />
        ))}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
