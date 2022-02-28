'use strict';

async function getQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const quoteData = await response.json();
    console.log(quoteData);
  } catch (error) {
    console.log('Some error!');
  }
}

getQuotes();
