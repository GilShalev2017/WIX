import React, { useState, useEffect } from 'react';

const countries = [
  { name: 'Canada', capital: 'Ottawa' },
  { name: 'United States', capital: 'Washington D.C.' },
  { name: 'Mexico', capital: 'Mexico City' },
  { name: 'Brazil', capital: 'Brasília' },
  { name: 'Argentina', capital: 'Buenos Aires' },
];

function Game() {
  const [currentCountry, setCurrentCountry] = useState({ name: 'Israel', capital: 'Jerusalem' });
  const [score, setScore] = useState(0);
  const [remainingCountries, setRemainingCountries] = useState([...countries]);

  useEffect(() => {
    loadNextQuestion();
  }, [remainingCountries]);

  function loadNextQuestion() {
    if (remainingCountries.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingCountries.length);
      const nextCountry = remainingCountries[randomIndex];
      setCurrentCountry(nextCountry);
    } else {
      alert(`Game over! Your score is ${score}.`);
    }
  }

  function handleAnswer(capital: string) {
    if (capital === currentCountry.capital) {
      setScore(score + 1);
    }
    setRemainingCountries(remainingCountries.filter((country) => country !== currentCountry));
  }

  return (
    <div>
      <h1>Match the country to its capital:</h1>
      <h2>{currentCountry.name}</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.name} onClick={() => handleAnswer(country.capital)}>
            {country.capital}
          </li>
        ))}
      </ul>
      <h3>Score: {score}</h3>
    </div>
  );
}

export default Game;
