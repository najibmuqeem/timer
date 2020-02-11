const args = process.argv;
for (let i in args) {
  if (!(isNaN(args[i]) && args[i] < 0)) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, 1000 * args[i]);
  }
}
