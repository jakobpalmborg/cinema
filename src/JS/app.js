import express from 'express';
import { engine } from 'express-handlebars';
import { loadMovie, loadMovies } from "./movies-from-api.js";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");
app.set("partials", "/templates/partials");


app.get("/", async (req, res) => {
    const movies = await loadMovies();
    res.render("index", { movies });
  });

app.get("/index", async (req, res) => {
    const movies = await loadMovies();
    res.render("index", { movies });
  });

  app.get("/movie-info/:movieId", async (req, res) => {
    const movie = await loadMovie(req.params.movieId);
    if (movie) {
      res.render("movie-info", { movie });
    } else {
      res.status(404).render("404");
    }
  });

app.get("/movies", async (req, res) => {
  const movies = await loadMovies();
  res.render("movies", { movies });
});

app.get('/salons', (req, res) => {
    res.render('salons');
});

app.get('/salonA', (req, res) => {
    res.render('salonA');
});

app.get('/salonB',  (req, res) => {
    res.render('salonB');
});

app.get('/restaurant',  (req, res) => {
    res.render('restaurant');
});

app.get('/events',  (req, res) => {
   res.render('events')
});

app.get('/under-construction', (req, res) => {
    res.render('under-construction');
});

app.get('/about-us', (req, res) => {
    res.render('about-us');
});

app.get('/booking', (req, res) => {
    res.render('booking');
});

app.use('/static', express.static('./static'));
app.use('/src', express.static('./src'));

export default app;