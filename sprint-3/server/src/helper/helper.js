const fs = require("fs");

function writeJSON(filename, content) {
  fs.writeFile(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
}

function readJSON(filename) {
  return JSON.parse(fs.readFileSync(filename, "utf8"));
}

module.exports = {
  readJSON,
  writeJSON
};
