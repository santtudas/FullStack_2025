const axios = require('axios');
const fs = require('fs');
const path = require('path');

const data = "Moikka vaan, tässä tekstiä treeniä varten."
const data2 = "Tässä lisää tekstiä."
const filePath = path.join(__dirname, 'watch.txt');
/*
function fetchData() {
  axios.get('https://jsonplaceholder.typicode.com/posts')	// Hae data
      .then(function(response) {
        console.log(response.data); // Logaa vastaus
		  	console.log("Works like a charm!");
      })
      .catch(function(error) {
        console.error('Error fetching data:', error); // Logaa error, jos failaa
      });
}
			
// Kutsu funktiota
fetchData();
*/
//	Exercise 4: Reading Files
function readFile() {
	fs.readFile('example.txt', 'utf8', function(err, data) { // Luetaan example.txt tiedosto
		if (err) {
			console.error("Virhe tiedoston luennassa...", err); // Logaa error jos failaa
			return;
		}
		console.log(data); // Jos menee läpi logataan
	})
};
// Kutsutaan funktiota
readFile(); 

//	Exercise 5: Writing Files
function writeText() {
	fs.writeFile('output.txt', data, 'utf8', function(err) { // Kirjoittaa output.txt tiedostoon
		if (err) {
			console.log(err); // Logataan error jos failaa
			return;
		}
		console.log("Tekstin kirjoitus onnistui")
		console.log(fs.readFileSync('output.txt', 'utf8')); // Logataan kirjoitettu teksti
		
		fs.appendFile('output.txt', data2, function(err) { // Lisätään tekstiä 
			if (err) {
				console.log(err); // Logataan jos failaa
				return;
			}
			console.log("Tekstin lisäys onnistui");
			console.log(fs.readFileSync('output.txt', 'utf8')); // Logataan kirjoitettu ja lisätty teksti
		})
	});
};
// Kutsutaan funktiota
writeText();

//	Exercise 6: Deleting Files
function removeText() {
	fs.unlink('temp.txt', function(err) { // Poistetaan tiedosto temp.txt
		if (err) {
			console.log(err); // Logataan error jos failaa
			console.log("Tiedoston poisto ei onnistunut...")
			return;
		}
		console.log("Tiedoston poisto onnistui"); // Logataan jos poisto onnistuu
	});
};
// Kutsutaan funktiota
removeText();

//	Exercise 7: Working with Directories
function createDir() {
	const dirPath = path.join(__dirname, "testi");
	fs.mkdir(path.join(__dirname, 'testi'), function(err) { // Luodaan tiedosto "testi"
		if (err) {
			console.log(err);	// Logataan error jos failaa
			console.log("Tiedoston luonti epäonnistui...");
			return;
		}
		console.log("Tiedoston luonti onnistui"); 	// Logataan jos luonti onnistuu

		removeDir(dirPath);
	});
};

function removeDir(dirPath) {
	fs.rmdir(dirPath, function(err) {
		if (err) {
			console.log(err); // Logataan eror jos failaa
			console.log("Tiedoston poisto epäonnistui");
			return;
		}
		console.log("Tiedoston poisto onnistui"); // Logataan onnistuminen
	});
};
// Kutsutaan funktiota
createDir();

//	Exercise 8: Watching for File Changes
fs.watch(filePath, function(eventType, filename) {	// Seurataan muutoksia "Filepath" sijainnissa
	if (filename) {
		console.log("\nTiedostoa " + filename + " muokattiin.");	// Logataan muutokset, jos on
		console.log("Muokkauksen tyyppi = " + eventType + ".");
	}
});