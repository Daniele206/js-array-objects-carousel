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

// input
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const select4 = document.getElementById('select4');
const select5 = document.getElementById('select5');
const stopStartLoop = document.querySelector('.stop_start_loop');
const invertLoop = document.querySelector('.invert_loop');

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
let rotation = 'bottom';
console.log(rotation);

invertLoop.addEventListener('click',function (){
  if(rotation === 'bottom'){
    clearInterval(autoScrol);
    autoScrol = setInterval(upScroll, 3000);
    rotation = 'top';
  }else if(rotation === 'top'){
    clearInterval(autoScrol);
    autoScrol = setInterval(downScroll, 3000);
    rotation = 'bottom';
  }
})

fullCarousell.addEventListener('mouseenter', function(){
  clearInterval(autoScrol);
});

fullCarousell.addEventListener('mouseleave', function(){
  if(rotation === 'top'){
    autoScrol = setInterval(upScroll, 3000);
  }else if(rotation === 'bottom'){
    autoScrol = setInterval(downScroll, 3000);
  }
});

select1.addEventListener('click', function(){
  imgCollection[0].classList.remove('hide');
  imgCollectionfullText[0].classList.remove('hide');
  imgPreviewCollection[0].classList.remove('shadow');
  imgPreviewCollection[0].classList.add('selected');
  counter = 0;
  imgCollection[1].classList.add('hide');
  imgCollectionfullText[1].classList.add('hide');
  imgPreviewCollection[1].classList.add('shadow');
  imgPreviewCollection[1].classList.remove('selected');

  imgCollection[2].classList.add('hide');
  imgCollectionfullText[2].classList.add('hide');
  imgPreviewCollection[2].classList.add('shadow');
  imgPreviewCollection[2].classList.remove('selected');

  imgCollection[3].classList.add('hide');
  imgCollectionfullText[3].classList.add('hide');
  imgPreviewCollection[3].classList.add('shadow');
  imgPreviewCollection[3].classList.remove('selected');

  imgCollection[4].classList.add('hide');
  imgCollectionfullText[4].classList.add('hide');
  imgPreviewCollection[4].classList.add('shadow');
  imgPreviewCollection[4].classList.remove('selected');
});

select2.addEventListener('click', function(){
  imgCollection[1].classList.remove('hide');
  imgCollectionfullText[1].classList.remove('hide');
  imgPreviewCollection[1].classList.remove('shadow');
  imgPreviewCollection[1].classList.add('selected');
  counter = 1;
  imgCollection[0].classList.add('hide');
  imgCollectionfullText[0].classList.add('hide');
  imgPreviewCollection[0].classList.add('shadow');
  imgPreviewCollection[0].classList.remove('selected');

  imgCollection[2].classList.add('hide');
  imgCollectionfullText[2].classList.add('hide');
  imgPreviewCollection[2].classList.add('shadow');
  imgPreviewCollection[2].classList.remove('selected');

  imgCollection[3].classList.add('hide');
  imgCollectionfullText[3].classList.add('hide');
  imgPreviewCollection[3].classList.add('shadow');
  imgPreviewCollection[3].classList.remove('selected');

  imgCollection[4].classList.add('hide');
  imgCollectionfullText[4].classList.add('hide');
  imgPreviewCollection[4].classList.add('shadow');
  imgPreviewCollection[4].classList.remove('selected');
});

select3.addEventListener('click', function(){
  imgCollection[2].classList.remove('hide');
  imgCollectionfullText[2].classList.remove('hide');
  imgPreviewCollection[2].classList.remove('shadow');
  imgPreviewCollection[2].classList.add('selected');
  counter = 2;
  imgCollection[1].classList.add('hide');
  imgCollectionfullText[1].classList.add('hide');
  imgPreviewCollection[1].classList.add('shadow');
  imgPreviewCollection[1].classList.remove('selected');

  imgCollection[0].classList.add('hide');
  imgCollectionfullText[0].classList.add('hide');
  imgPreviewCollection[0].classList.add('shadow');
  imgPreviewCollection[0].classList.remove('selected');

  imgCollection[3].classList.add('hide');
  imgCollectionfullText[3].classList.add('hide');
  imgPreviewCollection[3].classList.add('shadow');
  imgPreviewCollection[3].classList.remove('selected');

  imgCollection[4].classList.add('hide');
  imgCollectionfullText[4].classList.add('hide');
  imgPreviewCollection[4].classList.add('shadow');
  imgPreviewCollection[4].classList.remove('selected');
});

select4.addEventListener('click', function(){
  imgCollection[3].classList.remove('hide');
  imgCollectionfullText[3].classList.remove('hide');
  imgPreviewCollection[3].classList.remove('shadow');
  imgPreviewCollection[3].classList.add('selected');
  counter = 3;
  imgCollection[1].classList.add('hide');
  imgCollectionfullText[1].classList.add('hide');
  imgPreviewCollection[1].classList.add('shadow');
  imgPreviewCollection[1].classList.remove('selected');

  imgCollection[2].classList.add('hide');
  imgCollectionfullText[2].classList.add('hide');
  imgPreviewCollection[2].classList.add('shadow');
  imgPreviewCollection[2].classList.remove('selected');

  imgCollection[0].classList.add('hide');
  imgCollectionfullText[0].classList.add('hide');
  imgPreviewCollection[0].classList.add('shadow');
  imgPreviewCollection[0].classList.remove('selected');

  imgCollection[4].classList.add('hide');
  imgCollectionfullText[4].classList.add('hide');
  imgPreviewCollection[4].classList.add('shadow');
  imgPreviewCollection[4].classList.remove('selected');
});

select5.addEventListener('click', function(){
  imgCollection[4].classList.remove('hide');
  imgCollectionfullText[4].classList.remove('hide');
  imgPreviewCollection[4].classList.remove('shadow');
  imgPreviewCollection[4].classList.add('selected');
  counter = 4;
  imgCollection[1].classList.add('hide');
  imgCollectionfullText[1].classList.add('hide');
  imgPreviewCollection[1].classList.add('shadow');
  imgPreviewCollection[1].classList.remove('selected');

  imgCollection[2].classList.add('hide');
  imgCollectionfullText[2].classList.add('hide');
  imgPreviewCollection[2].classList.add('shadow');
  imgPreviewCollection[2].classList.remove('selected');

  imgCollection[3].classList.add('hide');
  imgCollectionfullText[3].classList.add('hide');
  imgPreviewCollection[3].classList.add('shadow');
  imgPreviewCollection[3].classList.remove('selected');

  imgCollection[0].classList.add('hide');
  imgCollectionfullText[0].classList.add('hide');
  imgPreviewCollection[0].classList.add('shadow');
  imgPreviewCollection[0].classList.remove('selected');
});