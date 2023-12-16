/*
Filename: ComplexCodeExample.js
Content: An example of a complex JavaScript code demonstrating object-oriented programming, inheritance, and asynchronous operations.
*/

// Animal class
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  // Method to get the animal's name
  getName() {
    return this.name;
  }
}

// Feline class that inherits from Animal
class Feline extends Animal {
  constructor(name, species) {
    super(name);
    this.species = species;
  }
  
  // Method to get the feline's species
  getSpecies() {
    return this.species;
  }
}

// Asynchronous function to simulate fetching data from an API
async function fetchDataFromAPI(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Create an instance of Feline
const tiger = new Feline('Simba', 'Tiger');

// Display the name and species of the feline
console.log(`Name: ${tiger.getName()}`);
console.log(`Species: ${tiger.getSpecies()}`);

// URL for fetching data from API
const apiUrl = 'https://example.com/api/data';

// Fetch data from API and log the result
fetchDataFromAPI(apiUrl)
  .then((data) => {
    console.log('Data fetched successfully:', data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// Another asynchronous operation using setTimeout
setTimeout(() => {
  console.log('This code is executed asynchronously after 3 seconds.');
}, 3000);

// ... continue with more complex code
// ... and more than 200 lines of code