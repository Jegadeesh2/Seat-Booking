'use strict';

const moviesEl=document.querySelector('#movies');
const countEl=document.querySelector('#count');
const totalEl=document.querySelector('#total');
const screenContainerEl=document.querySelector('.screen-container');

// Global variables
let moviePrice = moviesEl.value;
let seatCount=0;

moviesEl.addEventListener('change', function() {
  moviePrice = moviesEl.value;
  countEl.innerText= seatCount;
  totalEl.innerText= seatCount * moviePrice;
});

screenContainerEl.addEventListener('click', function (event) {
  if(event.target.classList.contains('seat')) {
    if (event.target.classList.contains('occupied')) {
    }else{
      event.target.classList.toggle('selected');
      const seatCountAr = document.querySelectorAll('.row .seat.selected');
      seatCount =  seatCountAr.length;
      countEl.innerText = seatCount;
      totalEl.innerText = seatCount * moviePrice;
    }
  }
});
