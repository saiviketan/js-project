
const jokeApiUrl = 'https://dad-jokes.p.rapidapi.com/joke/ai/cow';
const quoteApiUrl = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote';
const jokeApiKey = 'a3ad9276bcmshc79a2590bccd08bp1efd2ajsn743366a0f008';
const quoteApiKey = 'a3ad9276bcmshc79a2590bccd08bp1efd2ajsn743366a0f008';


const jokeBtn = document.getElementById('jokeBtn');
const quoteBtn = document.getElementById('quoteBtn');
const displayText = document.getElementById('displayText');


const fetchJoke = async () => {
  try {
    const response = await fetch(jokeApiUrl, {
      headers: { 'X-Api-Key': 'a3ad9276bcmshc79a2590bccd08bp1efd2ajsn743366a0f008' }
    });
    const data = await response.json();
    console.log(data);
    displayText.innerHTML = data[0].joke;
  } catch (error) {
    displayText.innerHTML = 'Failed to fetch joke. Try again later.';
  }
};


const fetchQuote = async () => {
  try {
    const response = await fetch(quoteApiUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a3ad9276bcmshc79a2590bccd08bp1efd2ajsn743366a0f008',
        'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
      }
    });
    const data = await response.json();
    displayText.innerHTML = `"${data.text}" - ${data.author}`;
  } catch (error) {
    displayText.innerHTML = 'Failed to fetch quote. Try again later.';
  }
};


jokeBtn.addEventListener('click', fetchJoke);
quoteBtn.addEventListener('click', fetchQuote);
