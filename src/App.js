import React from 'react';
import Flashcard from './Flashcard';
import { flashcards } from './data'; // make sure the path is correct

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>🧠 Flashcard Quiz</h1>
      <p style={{ textAlign: 'center' }}>Click on a card to flip it!</p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem'
      }}>
        {flashcards.map(card => (
          <Flashcard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
