const fs = require('fs');
const path = require('path');
const sg = require('any-steganography');

const file = path.join(__dirname, 'images', 'shaff.jpeg');
const output = path.join(__dirname, 'images', 'test-with-message.jpg');


const key = "12345678";
const buffer = sg.write(file, 'hey there', key);
fs.writeFile(output, buffer, (err) => {
	if (err) {
		console.log(err);
		return;
	}
});



 buffer = fs.readFileSync(output);
const message = steno.decode(buffer, 'jpg', key);
console.log(message);