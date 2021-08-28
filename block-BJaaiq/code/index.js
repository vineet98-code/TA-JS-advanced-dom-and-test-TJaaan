let root  = document.querySelector('ul');

let loop = 3;
let index = 0;

function addQuotes(){
  for(let i = 0; i<loop; i++){
    let li = document.createElement('li');
    let blockquote = document.createElement('blockquote');
    blockquote.innerText = quotes[index].quoteText;

    let cite = document.createElement('cite');
    cite.innerText = quotes[index].quoteAuthor;

    li.append(blockquote, cite);

    root.append(li);
    index++;
  }
}

document.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;

  if(scrollTop + clientHeight <= scrollHeight && index < quotes.length ){
    addQuotes();
  }

});

window.addEventListener('DOMContentLoaded', () => {
  alert('The content of the DOM is loaded');
  addQuotes();
})