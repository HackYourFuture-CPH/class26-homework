
const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";





async function fetchTodos() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    const message =`An error has occured: ${response.status}`
    throw new Error(message);
  }
  const data = await response.json();

  return data;
}



export default fetchTodos;
