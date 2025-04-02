const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('views', 'views');

// Kerrotaa sovellukselle mikä view engine, tässä tapauksessa EJS
app.set('view engine', 'ejs');

// Dataa Exercise 2: Passing Data to EJS Templates varten
const data = {
  nimi: "Jouni",
  ika: 49,
  syntymavuosi: 1976,
};

// Array Exercise 5: Looping in EJS varten
const osallistujat = ['Timo', 'Jouni', 'Taina'];

// Renderöi "index" tiedoston sisältö näkymään
app.get('/', (req, res) => {
  const condition = true;
  console.log("Condition is:", condition);
  res.render('index', { data, osallistujat, condition });
});

// Kuuntelee porttia ja logaa
app.listen(3000, () => {
  console.log('Server käy osoitteessa: http://localhost:3000');
});
