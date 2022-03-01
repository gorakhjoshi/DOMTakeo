'use strict';

const quoteContainer = document.querySelector('.quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuote;

function newQuote() {
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];

  quoteText.textContent = quote.text;

  if (quote.author) {
    quoteAuthor.textContent = quote.author;
  } else {
    quoteAuthor.textContent = 'unknown';
  }

  if (quote.text.length > 50) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
}

async function getQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes');
    const quoteData = await response.json();
    apiQuote = quoteData;
    newQuote(quoteData);
  } catch (error) {
    console.log('Some error!');
  }
}

function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text= ${quoteText.textContent} -${quoteAuthor.textContent}`;
  window.open(twitterURL, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();
