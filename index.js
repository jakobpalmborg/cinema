import express from 'express';
import fs from 'fs/promises';

const app = express();

app.get('/', async (req, res) => {
    const buf = await fs.readFile('./index.html');
    res.type('html');
    res.send(buf);
});

app.get('/index.html', async (req, res) => {
    const buf = await fs.readFile('./index.html');
    res.type('html');
    res.send(buf);
});

app.get('/movies.html', async (req, res) => {
    const buf = await fs.readFile('./movies.html');
    res.type('html');
    res.send(buf);
});

app.get('/salons.html', async (req, res) => {
    const buf = await fs.readFile('./salons.html');
    res.type('html');
    res.send(buf);
});

app.get('/salonA.html', async (req, res) => {
    const buf = await fs.readFile('./salonA.html');
    res.type('html');
    res.send(buf);
});

app.get('/salonB.html', async (req, res) => {
    const buf = await fs.readFile('./salonB.html');
    res.type('html');
    res.send(buf);
});

app.get('/restaurant.html', async (req, res) => {
    const buf = await fs.readFile('./restaurant.html');
    res.type('html');
    res.send(buf);
});

app.get('/events.html', async (req, res) => {
    const buf = await fs.readFile('./events.html');
    res.type('html');
    res.send(buf);
});

app.get('/under-construction.html', async (req, res) => {
    const buf = await fs.readFile('./under-construction.html');
    res.type('html');
    res.send(buf);
});

app.get('/about-us.html', async (req, res) => {
    const buf = await fs.readFile('./about-us.html');
    res.type('html');
    res.send(buf);
});

app.get('/booking.html', async (req, res) => {
    const buf = await fs.readFile('./booking.html');
    res.type('html');
    res.send(buf);
});





app.use('/static', express.static('./static'));
app.use('/src', express.static('./src'));

app.listen(3080);
