//https://rapidapi.com/GiulianoCrescimbeni/api/football98/

//is a database with stats andd information about football, is not update, but is posible to check some data

const url = "https://football98.p.rapidapi.com/competitions"; //is posible to setup news, fixture and another data changinh the URL /{championship}/endpoint/{additional information}
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "295c037658msh02afd26749f76c3p1c8a77jsne1bb5ae68f4d",
    "X-RapidAPI-Host": "football98.p.rapidapi.com",
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
