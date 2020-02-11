const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", key => {
  if (key === "\u0003") {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (key >= 1 && key <= 9) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => process.stdout.write("\x07"), 1000 * key);
  }
});
