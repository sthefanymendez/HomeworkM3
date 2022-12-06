const process = require("process");
const commands = require("./commands/index.js");

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", function (data) {
    const args = data.toString().trim();
    const cmd = args.split(" ")[0];
    if (commands[cmd]) {
      commands[cmd](print, args);
    } else {
      print("command not found: " + cmd);
    }
  });
}

bash();
module.exports = {
  print,
  bash,
};
