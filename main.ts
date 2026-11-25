// The Most Boring Object, Reviewed in One Line.
// Writes one single-line review (at most 200 characters) to /output/entry.txt
// and prints the same line to stdout. Pure Node, no dependencies.
const fs = require("fs");
const path = require("path");

const LINE =
  "The twist tie has been untwisted and retwisted a hundred times to keep the bread fresh, and still falls off the second the bag tips over.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, LINE + "\n", "utf8");
console.log(LINE);
