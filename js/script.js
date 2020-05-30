let button = document.getElementById('getQuote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

button.addEventListener('click',function(){
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
//   .then(data => {
//     console.log(`${data.content} —${data.author}`)
//   })
  .then(data => {
    let contentValue = data.content;
    let authorValue = data.author;
   
    quote.innerHTML = contentValue;
    author.innerHTML = authorValue;
})
  .catch(err => console.log("error!"))
});