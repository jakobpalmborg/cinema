export default function checkLocationForStyle() {
  if (
    location.pathname === "/restaurant" ||
    location.pathname === "/Uppgift2-Biograf/restaurant"
  ) {
    document.querySelector("#restaurant-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/movies" ||
    location.pathname === "/Uppgift2-Biograf/movies"
  ) {
    document.querySelector("#movies-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salons" ||
    location.pathname === "/Uppgift2-Biograf/salons"
  ) {
    document.querySelector("#salons-id").style.textDecoration = "underline";
  } else if (
    location.pathname === "/events" ||
    location.pathname === "/Uppgift2-Biograf/events"
  ) {
    document.querySelector("#events-id").style.textDecoration = "underline";
  } else if ( 
    location.pathname === "/salonA" ||
    location.pathname === "/Uppgift2-Biograf/salonA"
  ) {
    document.querySelector("#salon-A").style.textDecoration = "underline";
  } else if (
    location.pathname === "/salonB" ||
    location.pathname === "/Uppgift2-Biograf/salonB"
  ) {
    document.querySelector("#salon-B").style.textDecoration = "underline";
  }
}