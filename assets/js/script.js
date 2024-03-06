// array
const listImg = [
  {
    img: './assets/img/01.webp',
    title: 'Spiderman',
    description: 'Immergiti nei panni di Peter Parker, lunico e inimitabile amichevole spiderman di quartiere.'
  },
  {
    img: './assets/img/02.webp',
    title: 'Ratchet & Clank',
    description: 'Ratchet é un meccanico della razza Lombax che grazie al Dimensionatore é pronto a intraprendere mille avventure.'
  },
  {
    img: './assets/img/03.webp',
    title: 'Fortnite',
    description: 'Metti play prendi il bus e lanciati sull\'isola, si parte in 100 ma solo uno sopravvive nella Battle-Royale.'
  },
  {
    img: './assets/img/04.webp',
    title: 'Cat Game',
    description: 'Impersonifica un gatto nel suo cuoitidiano, all\'apparenza potrebbe sembrare noiso ma dietero c\'é molto di piú.'
  },
  {
    img: './assets/img/05.webp',
    title: 'Marvel Game',
    description: 'Entra nell\'universo marvel é sconfiggi decine di suoper cattivi utilizzando a turno tutti i tuoi super eroi preferiti.'
  },
];

// variables
const fullCarousell = document.querySelector('.full-carousell');
const imgContainer = document.querySelector('.img-container');
const topBtn = document.querySelector('.top');
const bottomBtn = document.querySelector('.bottom');
let autoScrol;
let counter = 0;

// array-className
const imgCollection = document.getElementsByClassName('img');
const imgCollectionfullText = document.getElementsByClassName('text_img');
const imgPreviewCollection = document.getElementsByClassName('img-preview');

// function
function downScroll(){
  imgCollection[counter].classList.add('hide');
  imgCollectionfullText[counter].classList.add('hide');
  imgPreviewCollection[counter].classList.add('shadow');
  imgPreviewCollection[counter].classList.remove('selected');
  counter++
  if (counter > (imgCollection.length - 1)){
    counter = 0;
  }
  imgCollection[counter].classList.remove('hide');
  imgCollectionfullText[counter].classList.remove('hide');
  imgPreviewCollection[counter].classList.remove('shadow');
  imgPreviewCollection[counter].classList.add('selected');
};

function upScroll(){
  imgCollection[counter].classList.add('hide');
  imgCollectionfullText[counter].classList.add('hide');
  imgPreviewCollection[counter].classList.add('shadow');
  imgPreviewCollection[counter].classList.remove('selected');
  counter--
  if (counter < 0){
    counter = (imgCollection.length - 1);
  }
  imgCollection[counter].classList.remove('hide');
  imgCollectionfullText[counter].classList.remove('hide');
  imgPreviewCollection[counter].classList.remove('shadow');
  imgPreviewCollection[counter].classList.add('selected');
}

// code

for(let i = 0; i < listImg.length; i++){
  const img = listImg[i].img;
  const imgTitle = listImg[i].title;
  const imgText = listImg[i].description;
  imgContainer.innerHTML += `
  <img class="img hide" src="${img}">
  <div class="text_img text-white hide">
    <h2 class="fw-bold">${imgTitle}</h2>
    <span>${imgText}</span>
  </div>
  `
};

imgCollection[counter].classList.remove('hide');
imgCollectionfullText[counter].classList.remove('hide');
imgPreviewCollection[counter].classList.remove('shadow');
imgPreviewCollection[counter].classList.add('selected');


topBtn.addEventListener('click', upScroll);

bottomBtn.addEventListener('click', downScroll);

autoScrol = setInterval(downScroll, 3000);

fullCarousell.addEventListener('mouseenter', function(){
  clearInterval(autoScrol);
});

fullCarousell.addEventListener('mouseleave', function(){
  autoScrol = setInterval(downScroll, 3000);
});

