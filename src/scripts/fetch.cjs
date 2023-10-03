const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "../assets/bracelet");
const images = [];

console.log(directoryPath);

fs.readdir(directoryPath, (err, files) => {
	if (err) {
		return console.log("Unable to scan directory: " + err);
	}

	files.forEach((file) => {
		images.push(`/assets/bracelet/${file}`);
	});

	fs.writeFileSync(
		"src/assets/bracelet/images.json",
		JSON.stringify(images),
		"utf8"
	);
});
