let selectedMovie = JSON.parse(localStorage.getItem('selectedMovie'));
let selectChairs = JSON.parse(localStorage.getItem('selectChairs'));

const ticketTitle = document.querySelector('.ticket__title');
ticketTitle.textContent = selectedMovie.movieName;

const ticketChairs = document.querySelector('.ticket__chairs');
ticketChairs.textContent = selectChairs.chairs;

const ticketHall = document.querySelector('.ticket__hall');
ticketHall.textContent = selectedMovie.hallName.slice(4);

const ticketStart = document.querySelector('.ticket__start');
ticketStart.textContent = selectedMovie.seanceTime;

const ticketCost = document.querySelector('.ticket__cost');
ticketCost.textContent = selectChairs.price;
