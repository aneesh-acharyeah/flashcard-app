import React from 'react';
import './App.css';
import Flashcard from './Flashcard';
import { flashcards } from './data';

function App() {
  return (
    <div className="App">
      <h1>📘 Flashcard Learning App</h1>
      <div className="card-grid">
        {flashcards.map(card => (
          <Flashcard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
