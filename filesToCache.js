const fs = require('fs');
const path = require('path');

function getFilesFromDir(dir, fileTypes) {
	var filesToReturn = [];

	function walkDir(currentPath) {
		var files = fs.readdirSync(currentPath);
		for (var i in files) {
			var curFile = path.join(currentPath, files[i]);
			if (fs.statSync(curFile).isFile()) {
				filesToReturn.push(curFile.replace(dir, ''));
			} else if (fs.statSync(curFile).isDirectory()) {
				walkDir(curFile);
			}
		}
	}

	walkDir(dir);
	return filesToReturn;
}
console.log(getFilesFromDir('./public/'));
fs.writeFileSync('./public/filesToCache.json', JSON.stringify(getFilesFromDir('./public').map((file) => '/' + file)));
