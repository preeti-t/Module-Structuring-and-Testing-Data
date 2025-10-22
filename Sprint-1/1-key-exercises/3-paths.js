// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";

// Find where the last slash is — that’s the boundary between the directory and the file
const lastSlashIndex = filePath.lastIndexOf("/");

// The "base" is everything after the last slash
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(0, lastSlashIndex); // everything before the last slash
const ext = base.slice(base.lastIndexOf(".")); // everything after the last dot, including the dot

console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${filePath} is ${ext}`);
