
import { renderBooking } from "./booking.js";

const movieHeading = document.querySelector('.movie-info-heading');
let movieTitle = movieHeading.innerText;

const btnBook = document.querySelector('#btnBook');

btnBook.setAttribute("data-movieTitle", movieTitle);

const saveBookingInfo = (e) => {
  e.preventDefault();
  //placeholders for variables
  let salon = "A"; //e.target.dataset.salon
  let title = movieTitle; //e.target.datset.title
  let time = "2022-12-29 kl. 20.00"; //e.target.datset.time

  renderBooking(salon, title, time);
};

btnBook.addEventListener("click", saveBookingInfo);



// export async function movieInfo() {
//   const movieOption = document.querySelectorAll(".movies-list-item");
//   const description = document.querySelector(".description");

//   for (let i = 0; i < movieOption.length; i++) {
//     movieOption[i].addEventListener("click", openMovieInfo, false);
//   }
//   function openMovieInfo(e) {
//     e.preventDefault();
//     window.open("under-construction");
//   }
// }
