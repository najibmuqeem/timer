const args = process.argv.slice(2);
if (args[0]) {
  for (let i in args) {
    if (!(isNaN(args[i]) && args[i] < 0)) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, 1000 * args[i]);
    }
  }
}
