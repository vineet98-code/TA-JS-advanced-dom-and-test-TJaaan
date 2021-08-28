let form = document.querySelector('form');
let root = document.querySelector('ul');


let cardData = JSON.parse(localStorage.getItem('cards')) || [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardData.push({title, category});
 
  createUI(cardData, ul)

  console.log(title, category);
});

function handleEdit(event, info, id, label){
   let elm = event.target; // p
   let input  = document.createElement('input');

   input.value = info;
   input.addEventListener('keyup', (e) => {
       if(e.keyCode === 13){
           let updatedValue = e.target.value; 
           cardData[id][label] = updatedValue;
           console.log('Pressed Enter', updatedValue);

           createUI();
           localStorage.setItem('cards', JSON.stringify(cardsData));
       }
   });
   input.addEventListener('blur', (e) => {
       
           let updatedValue = e.target.value; 
           cardData[id][label] = updatedValue;
           console.log('Pressed Enter', updatedValue);

           createUI();
           localStorage.setItem('cards', JSON.stringify(cardsData));
       
   });

   let parent = event.target.parentElement;
   parent.replaceChild(input, elm);
}

function createUI(data = cardData, root = ul) {
    root.innerHTml = '';
    let fragment = new DocumentFragment()
    data.forEach((cardInfo, index) => {
      let li = document.createElement('li');
      let h2 = document.createElement('h2');
      h2.innerText = data.title;
      let p = document.createElement('p');
      h2.addEventListener('dbclick', (event) => handleEdit(event, cardData.title, index, 'title'));
      p.innerText = data.category;
      p.addEventListener('dbclick', (event) => handleEdit(event, cardData.category, index, 'category'));

      li.append(p,h2);
      fragment.appendChild(li);
    });

    root.append(fragment);
}

createUI(cardData, ul);