const tree = (dirPath, depth) => {
  const fs = require("fs");
  const path = require("path");

  if (depth < 0) return;
  else
    fs.readdir(dirPath, { withFileTypes: true }, async (err, files) => {
      try {
        files.forEach((file) => {
          const filePath = path.join(dirPath, file.name);
          console.log(" ".repeat(depth * 2) + file.name);

          if (file.isDirectory()) {
            tree(filePath, depth - 1);
          }
        });
      } catch (err) {
        console.error(`Error reading the catalog: ${err}`);
        return;
      }
    });
};

function construction() {
  const args = process.argv.slice(2);
  const dirPath = args[0] || ".";
  const depth = args.includes("--depth")
    ? parseInt(args[args.indexOf("--depth") + 1])
    : Infinity;

  tree(dirPath, depth);
}
construction();
