const url = 'https://football98.p.rapidapi.com/competitions';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7d4e39af7cmsh523525055986977p132f30jsnca66c33274a1',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com',
  },
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
