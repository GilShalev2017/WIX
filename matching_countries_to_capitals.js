const prompt = require('prompt-sync')();

// Define a dictionary of countries and their capitals
const countriesCapitals = {
  Australia: 'Canberra',
  Brazil: 'Brasília',
  Canada: 'Ottawa',
  China: 'Beijing',
  Egypt: 'Cairo',
  France: 'Paris',
  Germany: 'Berlin',
  India: 'New Delhi',
  Italy: 'Rome',
  Japan: 'Tokyo',
  Mexico: 'Mexico City',
  Russia: 'Moscow',
  SouthAfrica: 'Pretoria',
  Spain: 'Madrid',
  UnitedKingdom: 'London',
  UnitedStates: 'Washington D.C.',
};

// Shuffle the keys of the dictionary
const countries = Object.keys(countriesCapitals);
shuffleArray(countries);

// Play the game
let score = 0;
for (const country of countries) {
  const capital = prompt(`What is the capital of ${country}?`);
  if (capital !== null && capital.toLowerCase() === countriesCapitals[country].toLowerCase()) {
    console.log('Correct!');
    score++;
  } else {
    console.log(`Incorrect. The capital of ${country} is ${countriesCapitals[country]}.`);
  }
}
console.log(`Game over. Your final score is ${score}/${countries.length}.`);

// Shuffle an array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
