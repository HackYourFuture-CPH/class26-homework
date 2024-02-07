

  function App() {
const la = [
  "You should name your variables and functions in a way that makes it clear what they do.",
  "You should use functions to avoid repeating code.",
  "You should make your functions do one thing and do it well.",
  "You should make sure to use the right data types for your variables.", "You should indent your code properly.",
  "You should organize your files and folders in a way that makes it easy to find things.",
  "You should write your styles in css files and not in the html file.",
];
const check = [ "Yes",  "No", "No", "Yes",
  "No", "No",
]
const doStuff =  { 
  console.log('stuff');
  la[0] = "[✓] " + la[0];
  check[0] = "Yes"; }

      const doStuff2 = () => {
            console.log('stuff2');
        la[0] = "[x] " +       la[0];
        check[0] = "No";
      }

return <>
<h1>This is how you read clean code:</h1>
    <ol> <li class="green">[✓] la[0]<button click={x => doStuff2()}>Stuff 2</button></li>
      <li style={{color: "red"}}>[x] la[1]<button click={x => doStuff()}>Yes</button></li>
<li style={{color: "red"}}>[x] la[2]<button click={x => doStuff2()}></button></li> <li class="greeen">[✓] la[3]<button click={x => doStuff2()}>Stuff 2</button></li>
          <li style={{color: "red"}}>[x] la[2]<button click={x => doStuff()}>Yes</button></li>
      <li style={{color: "red"}}>[x] la[3]<button click={x => doStuff2()}>Yes</button></li>
    </ol>
    <button click={x => doStuff()}>></button>
  </>
}

export default App;
